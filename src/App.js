import React, { Component } from 'react';
import Layout from './component/Layout';
import Login from './component/Login';
import Main from './component/Main';
import Profil from './component/Profil';
import Signup from './component/SignUp';

import {connect} from 'react-redux';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            route: 'main'
        }

        this.changeRoute = this.changeRoute.bind(this)
    }

    changeRoute(route){
        this.setState({
            route
        })
    }
  render() {
    if(this.props.user.userInfo === null){
        if(this.state.route === "signup"){
            return (
                <Layout>
                    <Signup success={this.changeUser} changeRoute={this.changeRoute}/>
                </Layout>
            );
        }
        return (
            <Layout>
                <Login success={this.changeUser} changeRoute={this.changeRoute}/>
            </Layout>
        );
    }
    const { route } = this.state;
    let view = null;
    switch (route){
        case 'main':
           view = <Main user={this.props.user} />
            break;
        case 'profil':
            view = <Profil user={this.props.user}/>
            break;
        case 'answers':
            break;

    }
      return (
          <Layout changeRoute={this.changeRoute}>
              {view}
          </Layout>
      );
  }
}

const mapStateToPops = (state)=>{
    return {
        user:state.user
    }
}



export default connect(mapStateToPops)(App);
