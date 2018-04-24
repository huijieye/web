import React, { Component } from 'react';
import axios from 'axios';
import FlatButton from 'material-ui/Button';


class Login extends Component {
    constructor(props){
        super(props)
        this.nameInput = null
        this.login = this.login.bind(this)
    }

    login(){
        axios.get('https://noodledistress.herokuapp.com/user/login/'+this.nameInput.value)
            .then((res) => {
                this.props.success(res.data)
            })
    }
    render(){
        return (<div>
            <label>identifiant</label>
            <input type="text" ref={(input) => this.nameInput = input}/>
            <button onClick={this.login}>Sign in</button>
            <FlatButton label="primary" onClick={()=>{this.props.changeRoute('signup')}}>Sign up</FlatButton>
        </div>);
    }
}

export default Login;