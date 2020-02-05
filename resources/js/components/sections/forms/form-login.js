import React, { Component, Fragment } from "react";
import {Form, Button} from "react-bootstrap";

class FormLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            userPassword: '',
            userName: '',
            isLogged: false
        }
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event){
        console.log('event change' + event);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmitLogin(event){
        const axios = require('axios');
        console.log(this.state);
        event.preventDefault();
        //consultar base de datos
        axios.post('/api/login', {
            password : this.state.userPassword,
            email : this.state.userName
        }).then((response) => {
            console.log("Respuesta" + response.data);
            if(response.data.state === 'success'){
                console.log('Usuario encontrado, login OK');
                //actualizar el state
                this.props.onLoginSubmit({isLogged: true,
                response: 'Success login'
                });
            }
        }).catch((error)=>{
            console.log(error);
        });
    }
    render() {
        return (
            <Fragment>
                <Form onSubmit={this.handleSubmitLogin}>
                    <Form.Group>
                        <Form.Label>Usuario:</Form.Label>
                        <Form.Control type="text" name="userName" placeholder="Escribe tu nombre de usuario" onChange = {this.handleOnChange}/>
                        <Form.Text type="muted-text">Tu usuario proporcionado por el web master.</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="userPassword" placeholder="Introduce tu password" onChange={this.handleOnChange}/>
                        <Form.Text type="muted-text">Tu contraseña proporcionada por el web master.</Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btnStyle">Ingresar</Button>
                </Form>
            </Fragment>
        );
    }
}

export default FormLogin;