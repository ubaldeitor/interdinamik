import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import MessageService from '../../../services/message-service';

class ContactoFrm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nametxt: '',
            emailtxt: '',
            messagetxt: '',
            phonetxt: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //Service message
        this.messageService = new MessageService();
    }

    handleSubmit(event) {
        console.log('Send message - api save message');
        console.log(event);
        event.preventDefault();
        const payload = {
            nametxt: this.state.nametxt,
            phonetxt: this.state.phonetxt,
            emailtxt: this.state.emailtxt,
            messagetxt: this.state.messagetxt
          };
        try{
            this.messageService.saveMessage(payload);
        } catch(error){
            console.log(error);
        }
    }

    handleChange(event) {
        console.log('event change' + event);
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Fragment>
                <h2 className="titleStyle">Información y Contacto</h2>
                <Form className="txtStyle" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="nametxt">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="nametxt" placeholder="Su nombre por favor" onChange={this.handleChange}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="emailtxt">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" name="emailtxt" placeholder="Enter email" onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                            Nunca compartiremos tu correo con nadie más.
                                </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="phonetxt">
                        <Form.Label>Teléfono:</Form.Label>
                        <Form.Control type="text" name="phonetxt" placeholder="Teléfono de contacto" onChange={this.handleChange} />
                        <Form.Text className="text-muted">No es obligatorio, pero nos ayudará a contactarte más rápido.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="messagetxt">
                        <Form.Label>¿Cómo te ayudamos?</Form.Label>
                        <Form.Control as="textarea" rows="3" name="messagetxt" onChange={this.handleChange}></Form.Control>
                        <Form.Text className="text-muted">Consulta nuestro aviso de privacidad <span>aquí</span></Form.Text>
                    </Form.Group>
                    <Button className="btnStyle" variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Fragment>
        )
    }

}

export default ContactoFrm;