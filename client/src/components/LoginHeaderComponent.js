import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink} from 'react-router-dom';
import Axios from "axios";

class Header extends Component {

    userData;

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.getUser = this.getUser.bind(this);
        this.state = {
          isNavOpen: false,
          isLoginOpen: false,
          registerEmail: "",
          registerUsername: "",
          registerFirstName: "",
          registerLastName: "",
          registerPassword: "",
          loginUsername: "",
          loginPassword: "",
          data: null

        };
      }

      

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      

      getUser() {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:4000/user"
        }).then((res) => {
          this.setData(res.data);
          console.log(res);
        });
      };
      

    render() {

        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Dream Log' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                              <NavItem>
                                  <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> Dream Log</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Profile</NavLink>
                              </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                               <NavItem>
                                   <Button outline onClick={this.toggleLogin} className = "col"><span className="fa fa-sign-in fa-lg"></span> Logout</Button>
                               </NavItem>
                           </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container text-white">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Welcome Back</h1>
                               
                            </div>
                            <div className="col-12 col-sm-6">
                                <img src = 'assets/images/logo.png' alt = "logo" className = "img-fluid"/>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
               

               
            </div>
        );
    }
}

export default Header;
