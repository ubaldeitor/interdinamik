import React from "react";
import { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./page_one.css";
import ContactoFrm from "../forms/contacto-frm";

class PageOne extends Component {
    constructor(props) {
        super();
        this.state = {
            elements: null
        }
        this.getElements = this.getElements.bind(this);
    }

    componentDidMount(){
        this.getElements();
    }

    getElements(){
        const elementsCaller = require('axios');
        elementsCaller.post('/api/elements', {
            isLoggedIn: this.state.isLogged
        }).then((response)=>{
            console.log("Respuesta:" + response);
            if(response.data.state === 'success'){
                console.log('Elements found');
                this.setState({
                    elements: response.data.elements
                });
                //actualizar el state
            } 
        }).catch((error)=>{
            console.log(error);
        });
    }

    render() {
        if(!this.state.elements){
           return <div />
        }
        return (
            <Container fluid>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div class="portada-img">
                            <div class="portada-msg">
                                <h3 class="sub-front-msg">Ese obsequió para una ocasión especial lo encuentras en</h3>
                                <h1 class="front-msg">Interdinamik</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="enterpriseMsg">
                            <h1>{this.state.elements[2].value}</h1>

                            <h3 className="txtStyle main-msg">{this.state.elements[3].value}</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} md={12} sm={12}>
                        <div className="description">
                            <h3 className="sbtStyle">{this.state.elements[4].value}</h3>
                            <img
                                src={this.state.elements[17].path}
                                alt="Nosotros"
                                width="100%"
                            />
                            <p className="txtStyle">
                                {this.state.elements[5].value}
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <div className="description">
                            <h3 className="sbtStyle">{this.state.elements[6].value}</h3>
                            <img
                                src={this.state.elements[18].path}
                                alt="Acción social"
                                width="100%"
                            />
                            <p className="txtStyle">
                                {this.state.elements[7].value}
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        <div className="description">
                            <h3 className="sbtStyle">{this.state.elements[8].value}</h3>
                            <img
                                src= {this.state.elements[19].path}
                                alt="Distribución"
                                width="100%"
                            />
                            <p className="txtStyle">
                                {this.state.elements[9].value}
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="ubicationStyle">
                    <Col lg={6}>
                        <div id="ubicacion">
                            <h2 className="titleStyle">Ubicación</h2>
                            <p className="txtStyle">
                                Puedes visitar nuestro Show Room y tienda física
                                en:
                            </p>
                            <p className="txtStyle">
                                Dirección:
                                <br />
                                Teléfono:
                                <br />
                                Whatsapp:
                                <br />
                                Email: contacto@interdinamik.com
                            </p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <p>Próximamente nuestro Show Room ¡Espéralo!</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}></Col>
                    <Col lg={4}>
                        <div id="contacto" className="infoStyle">
                            <ContactoFrm />
                        </div>
                    </Col>
                    <Col lg={4}></Col>
                </Row>
                <Row className="ubicationStyle">
                    <Col lg={4} md={4} sm={12}>
                        <p className="backStyle">Anterior</p>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div id="noticias">
                            <h2 className="titleStyle">
                                {this.state.elements[10].value}
                            </h2>
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <p className="nextStyle">Siguiente</p>
                    </Col>
                </Row>
                <Row className="ubicationStyle">
                    <Col lg={4} md={4} sm={12}>
                        <div>
                            <h4 className="sbtStyle">{this.state.elements[11].value}</h4>
                            <p className="txtStyle">
                                {this.state.elements[12].value}
                            </p>
                        </div>
                        <p className="txtLinkStyle">
                            <i>Leer más</i>
                        </p>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div>
                            <h4 className="sbtStyle">{this.state.elements[13].value}</h4>
                            <p className="txtStyle">
                                {this.state.elements[14].value}
                            </p>
                        </div>
                        <p className="txtLinkStyle">
                            <i>Leer más</i>
                        </p>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div>
                            <h4 className="sbtStyle">{this.state.elements[15].value}</h4>
                            <p className="txtStyle">
                                {this.state.elements[16].value}
                            </p>
                            <p className="txtLinkStyle">
                                <i>Leer más</i>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PageOne;
