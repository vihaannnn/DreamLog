import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink} from 'react-router-dom';
import Axios from "axios";

class Header extends Component {

    userData;

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleSignUp = this.toggleSignUp.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleRegisterUsernameChange = this.handleRegisterUsernameChange.bind(this);
        this.handleRegisterPasswordChange = this.handleRegisterPasswordChange.bind(this);
        this.register = this.register.bind(this);
        this.state = {
          isNavOpen: false,
          isLoginOpen: false,
          registerUsername: "",
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

      toggleLogin() {
        this.setState({
          isLoginOpen: !this.state.isLoginOpen
        });
      }

      toggleSignUp() {
        this.setState({
          isSignUpOpen: !this.state.isSignUpOpen
        });
        console.log(this.isSignUpOpen);;
      }

      handleLogin(event)
      {
        this.toggleLogin();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
      }

      handleSignUp(event)
      {
        this.toggleSignUp();
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Email ID: " + this.email.value
            + " Firstname: " + this.firstname.value + " Lastname: " + this.lastname.value + " Remember: " + this.remember.checked);
        event.preventDefault();
      }

      //Handling functions
      handleRegisterUsernameChange(e) {
        //console.log(e.target.value);
        const newValue = e.target.value
        //console.log(newValue)
        this.setState({
            registerUsername: newValue
        });
        setTimeout(() => { console.log(this.state.registerUsername); }, 300);
     }
      
     
        handleRegisterPasswordChange(e) {
            const newValue = e.target.value
            //console.log(newValue)
            this.setState({
                registerPassword: newValue
            });
            setTimeout(() => { console.log(this.state.registerPassword); }, 300);
     }





     register(e) {
        console.log(this.registerUsername)
        Axios({
          method: "POST",
          data: {
            username: this.state.registerUsername, 
            password: this.state.registerPassword
          },
          withCredentials: true,
          url: "http://localhost:4000/register"
        }).then((res) => console.log(res));
        
      }

      login (){
          console.log()
        Axios({
            
          method: "POST",
          data: {
            username: this.loginUsername, 
            password: this.loginPassword
          },
          withCredentials: true,
          url: "http://localhost:4000/login"
        }).then((res) => console.log(res));
      };


      componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                registerUsername: this.userData.registerUsername,
                registerPassword: this.userData.registerPassword
            })
        } else {
            this.setState({
                registerUsername: "",
                registerPassword: ""
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(
          `this.state.registerUsername( componentDidUpdate)`,
          this.state
        );
      }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

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
                                  <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                              </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                               <NavItem>
                                   <Button outline onClick={this.toggleLogin} className = "col"><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                               </NavItem>
                               &nbsp; &nbsp;
                               <NavItem>
                                   <Button outline onClick={this.toggleSignUp} className = "col"><span className="fa fa-sign-in fa-lg"></span> Sign Up</Button>
                               </NavItem>
                           </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container text-white">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Dream Log</h1>
                                <p>LOG YOUR DREAMS AND ANALYSE THEM TOO</p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <img src = 'assets/images/logo.png' alt = "logo" className = "img-fluid"/>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isLoginOpen} toggle={this.toggleLogin}>
                   <ModalHeader toggle={this.toggleLogin}>Login</ModalHeader>
                   <ModalBody>
                   <Form onSubmit={this.handleLogin}>
                         <FormGroup>
                             <Label htmlFor="username">Username</Label>
                             <Input type="text" id="username" name="username"
                                 innerRef={(input) => this.username = input} />
                         </FormGroup>
                         <FormGroup>
                             <Label htmlFor="password">Password</Label>
                             <Input type="password" id="password" name="password"
                                 innerRef={(input) => this.password = input}  />
                         </FormGroup>
                         <FormGroup check>
                             <Label check>
                                 <Input type="checkbox" name="remember"
                                 innerRef={(input) => this.remember = input}  />
                                 Remember me
                             </Label>
                         </FormGroup>
                         <Button type="submit" value="submit" color="primary">Login</Button>
                     </Form>
                   </ModalBody>
               </Modal>


               <Modal isOpen={this.state.isSignUpOpen} toggle={this.toggleSignUp}>
                  <ModalHeader toggle={this.toggleSignUp} >Sign Up</ModalHeader>
                  <ModalBody>
                  <Form onSubmit={this.register}>
                        <FormGroup>
                            <Label htmlFor="email">Email ID</Label>
                            <Input type="email" id="email" name="email"
                                innerRef={(input) => this.email = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <input type="text" name="username" value={this.state.registerUsername} className="form-control" onChange={this.handleRegisterUsernameChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="firstname">Firstname</Label>
                            <Input type="text" id="firstname" name="firstname"
                                innerRef={(input) => this.firstname = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="lastname">Lastname</Label>
                            <Input type="text" id="lastname" name="lastname"
                                innerRef={(input) => this.lastname = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <input type="password" name="password" value={this.state.registerPassword} className="form-control" onChange={this.handleRegisterPasswordChange.bind(this)} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                innerRef={(input) => this.remember = input}  />
                                Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                  </ModalBody>
              </Modal>
            </div>
        );
    }
}

export default Header;
