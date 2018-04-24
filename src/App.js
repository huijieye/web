import React, { Component } from 'react';
import Layout from './component/Layout';
import Login from './component/Login';
import Main from './component/Main';
import Profil from './component/Profil';
import Signup from './component/SignUp';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            // user: {
            //     "id": 3,
            //     "login": "hjxn",
            //     "first_name": "huijie",
            //     "excuse": "grtgtrgrtht",
            //     "longitude": 0,
            //     "latitude": 0,
            //     "distance": 200
            // },
            user:null,
            route: 'main'
        }
        this.changeUser = this.changeUser.bind(this)
        this.changeRoute = this.changeRoute.bind(this)
    }
    changeUser(user){
        this.setState({
            user
        })
    }

    changeRoute(route){
        this.setState({
            route
        })
    }
  render() {
    if(this.state.user === null){
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
           view = <Main user={this.state.user} />
            break;
        case 'profil':
            view = <Profil user={this.state.user}/>
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

export default App;
