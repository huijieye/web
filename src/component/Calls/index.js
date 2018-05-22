import React, { Component } from 'react';
import {showProcess,answersProcess} from '../../_commun/src/process/Call'
import {connect} from "react-redux";
import { ListGroup, ListGroupItem,Button } from 'reactstrap';

class Calls extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color:null
        }
    }

    answers(callId){
        this.setState= {
            color:"success"
        }
        answersProcess(this.props.dispatch,this.props.user.userInfo.id,callId)
    }


    render() {
        const { call } = this.props;
        if(call.list === null && call.loading === false){
            showProcess(this.props.dispatch,this.props.user.userInfo.id)
            return null;
        }
        if(call.loading === true){
            return (<p>loading</p>);
        }
        else{
            console.log(this.props.call.answer)
            return (

                <div>
                    <Button color="success" onClick={()=>showProcess(this.props.dispatch,this.props.user.userInfo.id)}>Actualiser</Button>
                    <ListGroup>
                        {
                            call.list.map(c => {
                                return (<ListGroupItem id={c.id} color={this.state.color} onClick={()=>this.answers(c.id)}>{c.creator.first_name+' -' +
                                ' '+c.creator.excuse+' - '+c.created_date}</ListGroupItem>)
                            })
                        }
                    </ListGroup>
                </div>
            )
        }

    }

}

const mapStateToProps = (state) => {
    return {
        call:state.call
    }
}

export default connect(mapStateToProps)(Calls);