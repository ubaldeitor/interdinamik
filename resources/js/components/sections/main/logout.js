import React from 'react';
import {Component} from 'react';
import { Row, Col, Container } from "react-bootstrap";
import FormLogin from "../forms/form-login";
import "./login.css";

class Logout extends Component{

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm={12} md={3} lg={4}></Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className="loginSty">
                            <h1>¡Hasta pronto!</h1>
                            <h3>Para cerrar la sesión da click en el siguiente botón.</h3>
                            <FormLogout onLoginSubmit = {this.props.loginAuth}/>
                        </div>
                    </Col>
                    <Col sm={12} md={3} lg={4}></Col>
                </Row>
            </Container>    
        );
    }
}

export default Logout;