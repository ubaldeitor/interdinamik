import React from 'react';
import {Component} from 'react';
import { Row, Col, Container } from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import FormLogin from "../forms/form-login";
import "./login.css";

class Login extends Component{
    constructor(props){
        super(props);
    }

    render() {
        if(this.props.isLogged === true){
            console.log('redirigiendo a adminapp');
            return <Redirect from='/view/login' to= '/view/adminapp' />;
        } else {
        return (
            <Container fluid>
                <Row>
                    <Col sm={12} md={3} lg={4}></Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className="loginSty">
                            <h1>¡Bienvenido!</h1>
                            <h3>Para acceder a las herramientas del administrador introduce tu usuario y contraseña.</h3>
                            <FormLogin onLoginSubmit = {this.props.loginAuth}/>
                        </div>
                    </Col>
                    <Col sm={12} md={3} lg={4}></Col>
                </Row>
            </Container>    
        );
        }
    }
}

export default Login;