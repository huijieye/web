import React, { Component } from 'react';
import Imenu from './component/Imenu'

class Layout extends Component {

    render(){
        return (<div>
            <Imenu changeRoute={this.props.changeRoute}></Imenu>
            {this.props.children}
            </div>);
    }
}

export default Layout;