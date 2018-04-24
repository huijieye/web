import React, { Component } from 'react';
import FlatButton from 'material-ui/Button';
import axios from 'axios';

class Signup extends Component {

    constructor(props){
        super(props)
        this.addUser=this.addUser.bind(this)
    }

    addUser(){
        const user = {
            login:this.loginInput.value,
            first_name:this.nameInput.value,
            excuse:this.excuseInput.value
        }
        axios.post('https://noodledistress.herokuapp.com/user/',JSON.stringify(user)).then((res)=>{
            console.log(res)
            this.props.success(res.data)
        })
    }

    render(){
        return (<div>
            <label>identifiant</label>
            <input ref={(input)=>this.loginInput=input}/>
            <label>Nom</label>
            <input ref={(input)=>this.nameInput=input}/>
            <label>excuse</label>
            <input ref={(input)=>this.excuseInput=input}/>
            <FlatButton label="primary" onClick={this.addUser}>Valide</FlatButton>
        </div>);
    }
}

export default Signup;