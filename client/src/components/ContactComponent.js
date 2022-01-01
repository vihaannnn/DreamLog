import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink} from 'react-router-dom';
import Axios from "axios";

class Contact extends Component {

   

    constructor(props) {
        super(props);

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleQueryChange = this.handleQueryChange.bind(this);
        this.fileQuery = this.fileQuery.bind(this);
        
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          query: "",
          data: null

        };
      }

    handleFirstNameChange(e) {
        const newValue = e.target.value
        this.setState({
            firstName: newValue
        });
    }

    handleLastNameChange(e) {
        const newValue = e.target.value
        this.setState({
            lastName: newValue
        });
    }

    handleEmailChange(e) {
        const newValue = e.target.value
        this.setState({
            email: newValue
        });
     }

     handleQueryChange(e) {
        const newValue = e.target.value
        this.setState({
            query: newValue
        });
        
       
     }
    
     fileQuery(e){
        e.preventDefault();
        Axios({
            method: "POST",
            data: {
              email: this.state.email,
              firstname: this.state.firstName,
              lastname: this.state.lastName, 
              query: this.state.query
            },
            withCredentials: true,
            url: "http://localhost:4000/queryFile"
          }).then((res) => console.log(res));
         

     }

    render() {

        return(
            <div>
                <Form onSubmit={this.fileQuery} className="form text-white col-6">

                    <FormGroup>
                        <Label htmlFor="email">Email ID</Label>
                        <Input type="email" name="email" value={this.state.email} className="form-control" onChange={this.handleEmailChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="firstname">Firstname</Label>
                        <Input type="text" name="firstname" value={this.state.firstName} className="form-control" onChange={this.handleFirstNameChange} />
                        
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="lastname">Lastname</Label>
                        <Input type="text" name="firstname" value={this.state.lastName} className="form-control" onChange={this.handleLastNameChange} />
                        
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="query">Query</Label>
                        <Input type="textarea" name="query" value={this.state.query} className="form-control" onChange={this.handleQueryChange} />
                        
                    </FormGroup>

                    <Button color = "primary">Submit</Button>
                </Form>
            </div>
        );
    }
}

export default Contact;
