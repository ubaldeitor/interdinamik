import React, { Component, Fragment } from "react";
import {Form, Button} from "react-bootstrap";

class FormLogout extends Component {
    constructor(props){
        super(props);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    }

    handleSubmitLogin(event){
        //consultar base de datos
        //actualizar el state
        event.preventDefault();
        this.props.onLoginSubmit({isLogged: false,
            response: 'Logout - Session closed'
        });

    }
    render() {
        return (
            <Fragment>
                <Form onSubmit={this.handleSubmitLogin}>
                    <Button variant="primary" type="submit" className="btnStyle">Salir del administrador</Button>
                </Form>
            </Fragment>
        );
    }
}

export default FormLogout;