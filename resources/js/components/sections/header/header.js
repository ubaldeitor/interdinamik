import React, { Fragment } from 'react';
import { Component } from "react";
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./header.css";

class Header extends Component {
    render() {
        const httpLink = process.env.MIX_APP_URL_BLOG;
        //console.log("url link: " + httpLink);
        return (
            <Navbar className="navbar_header" >
                <Navbar.Brand to={'/'}><img src="images/logo.jpg" width="200px" alt="Interdinamik_logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item className="nav-item"><Nav.Link href="/" className="nav-item">Inicio</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-item"><Nav.Link href= {httpLink}  className="nav-item">Productos</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-item"><Nav.Link href="#ubicacion" className="nav-item">Ubicación</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-item"><Nav.Link href="#contacto" className="nav-item">Contacto</Nav.Link></Nav.Item>
                        <Nav.Item className="nav-item"><Nav.Link href={httpLink + "/?page_id=64"} className="nav-item">Noticias</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;