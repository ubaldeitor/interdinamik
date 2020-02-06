import React from "react";
import { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./footer.css";
import {
    BrowserRouter as Router, Link
} from "react-router-dom";

class Footer extends Component {
    render() {
        const httpLinkFoot = process.env.MIX_APP_URL_BLOG;
        return (
            <Container fluid>
            <Row className="footerStyle" >
                    <Col lg={4} md={4} sm={12}>
                        <div>
                            <h2 className="titleStyle">Interdinamik</h2>
                            <p className="txtStyle">Dirección:<br />
                                Teléfono:<br />
                                Email: contacto@interdinamik.com
                                </p>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div>
                        <h4 className="sbtStyle">Accesos directos</h4>
                            <ul>
                                <li><Link className="txtStyle" to={'/'}>Inicio</Link></li>
                                <li><Link className="txtStyle" to={'/view/login'}>Login</Link></li>
                                <li><Link className="txtStyle" to={'/view/adminapp'}>Admin</Link></li>
                                <li><a className="txtStyle" href={httpLinkFoot}>Productos</a></li>
                                <li><a className="txtStyle" href={httpLinkFoot+'/?page_id=64'}>Noticias</a></li>
                                <li>Aviso de Privacidad</li>
                            </ul>    
                        </div>
                    </Col>

                    <Col lg={4} md={4} sm={12}>
                        <h4 className="sbtStyle">Síguenos en nuestras redes sociales:</h4>
                        <p className="txtStyle">
                            Facebook<br />
                            Instagram<br />
                            Pinterest<br />
                            Twitter<br />
                            Google+
                        </p>
                    </Col>
                </Row>
                <Row className="powerBy">
                    <Col>
                        <div>
                            <p className="endTxtStyle">@Interdinamik all rigths reserved. Interdinamik designed by <span>Ubainternet</span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;