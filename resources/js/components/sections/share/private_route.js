import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { thisExpression } from '@babel/types';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.isLogged = this.props.isLogged;
        this.component = this.props.component;
    }

    render(){
        console.log('this path:' + this.props.path);
        
        if (this.isLogged) {

            return <this.component />;
        } 
        return (<Redirect to={{pathname:'/view/login'}} loginAuth={this.props.loginAuth} isLogged={this.props.isLogged}/>);

    }

}

export default PrivateRoute;


