import React, { Component } from 'react';
import {showProcess} from '../../_commun/src/process/Call'
import {connect} from "react-redux";

class Calls extends Component {

    constructor(props) {
        super(props)
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
            return call.list.map(c => {
                return (<p>{c.creator.first_name+' - '+c.creator.excuse+' - '+c.created_date}</p>)
            })
        }

    }

}

const mapStateToProps = (state) => {
    return {
        call:state.call
    }
}

export default connect(mapStateToProps)(Calls);