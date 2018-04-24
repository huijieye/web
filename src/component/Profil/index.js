import React, { Component } from 'react';
import FlatButton from 'material-ui/Button';
import axios from "axios/index";


class Profil extends Component {

    constructor(props){
        super(props)
        this.nameInput=this.excuseInput=this.distanceInput=null
        this.updateUser=this.updateUser.bind(this)
    }

    updateUser(){
        const newUser = Object.assign({}, this.props.user, {
            first_name: this.nameInput.value,
            excuse: this.excuseInput.value,
            distance: parseInt(this.distanceInput.value, 10)
        })

       axios.put('https://noodledistress.herokuapp.com/user/',JSON.stringify(newUser))
    }

    render(){
        const { first_name,excuse,distance } = this.props.user
        return (<div>
            <label>Nom</label>
            <input type="text" defaultValue={first_name} ref={(input)=>this.nameInput = input}/>
            <label>excuse</label>
            <input type="text" defaultValue={excuse} ref={(input)=>this.excuseInput = input}/>
            <label>distance</label>
            <input type="text" defaultValue={distance} ref={(input)=>this.distanceInput = input}/>

            <FlatButton label="primary" onClick={this.updateUser}>Update</FlatButton>

        </div>);
    }
}

export default Profil;