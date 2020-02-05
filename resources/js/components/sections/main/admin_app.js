import React from 'react';
import { Component } from 'react';
import { Row, Col, Container, Accordion, Card, Button, Table } from "react-bootstrap";

class AdminApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            code:'',
            msg: '',
            state: ''
        }
        this.getMessages = this.getMessages.bind(this);
    }

    componentDidMount(){
        this.getMessages();
    }

    getMessages(){
        const messagesCaller = require('axios');
        messagesCaller.post('/api/messages', {
            isLoggedIn: true
        }).then((response)=>{
            console.log("Respuesta:" + response.data);
            if(response.data.state === 'success'){
                console.log('Mensajes encontrados');
                this.setState({
                    messages: response.data.messages,
                    state: response.data.state,
                    code: response.data.code,
                    msg: response.data.msg
                });
                //actualizar el state
            } 
        }).catch((error)=>{
            console.log(error);
        });
    }
    
    render() {
        const printMessages = this.state.messages.map((msgItem, index)=>
            <tr key={index}>
                <td>{msgItem.id}</td><td>{msgItem.name}</td><td>{msgItem.phone}</td><td>{msgItem.email}</td><td>{msgItem.message}</td>
            </tr>
        );
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div>
                            <h1>Panel de Control</h1>
                        </div>
                        <div>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Mensajes
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                    <th>Id</th>
                                                    <th>Nombre</th>
                                                    <th>Teléfono</th>
                                                    <th>Email</th>
                                                    <th>Mensaje</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {printMessages}
                                                </tbody>
                                            </Table> 
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
                );
            }
        }
        
export default AdminApp;