import React from "react";
import { Component } from "react";
import PageOne from '../main/page_one';
import Login from '../main/login';
import Logout from '../main/logout';
import AdminApp from '../main/admin_app';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import PrivateRoute from '../share/private_route';
import Header from '../header/header';
import Footer from '../footer/footer';


class MainPage extends Component {
    constructor(props){
        super(props);
        this.state={
            isLogged: false,
            token: '',
            refresh_token:''
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(response){
        this.setState({
            isLogged: response.isLogged
        });
    }

    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={PageOne} />
                    <Route path='/view/login' render={(props)=><Login {...props} loginAuth={this.handleLogin} isLogged={this.state.isLogged}/>} />
                    <Route path='/view/logout' render={(props)=><Logout {...props} loginAuth={this.handleLogin} isLogged={this.state.isLogged}/>} />
                    <PrivateRoute path='/view/adminapp' component={AdminApp} isLogged={this.state.isLogged} loginAuth={this.handleLogin}/>
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default MainPage;