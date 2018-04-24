import React, { Component } from 'react';
import FlatButton from 'material-ui/Button';
import axios from "axios/index";


import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import deepOrange from 'material-ui/colors/deepOrange';


const styles = {
    avatar: {
        margin: 10,
    },
    orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
};

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            idCall: null
        }
        this.help = this.help.bind(this)
    }
    help(){
        axios.post('https://noodledistress.herokuapp.com/call/'+this.props.user.id).then((res)=>{
            this.setState({
                idCall:res.data.id
            })
        })
    }

    stop(){
        axios.delete('https://noodledistress.herokuapp.com/call/'+this.state.idCall).then((res)=>{
            console.log(res.status)
        })
    }

    render(){
        const { first_name } = this.props.user
        return (<div>
            <Avatar className="orangeAvatar">{first_name}</Avatar>
            <FlatButton label="Default" onClick={this.help}> CAll </FlatButton>
            <FlatButton label="Default" onClick={this.stop}> stop call </FlatButton>
        </div>);
    }
}

export default withStyles(styles)(Main);