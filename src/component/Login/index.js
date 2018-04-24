import React, { Component } from 'react';
import axios from 'axios';
import FlatButton from 'material-ui/Button';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import Title from '../style/Title'
import StyleCol from '../style/LoginCol'



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
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 4, offset: 4 }}><Title >Se connecter</Title></Col>
                </Row>
                <Row>
                    <StyleCol sm="12" md={{ size: 6, offset: 3 }}>
                        <Form>
                            <FormGroup>
                                <Label>Identifiant</Label>
                                <Input type="text" ref={(input) => this.nameInput = input} />
                            </FormGroup>

                            <Button onClick={this.login}>Submit</Button>
                            <FlatButton label="primary" onClick={()=>{this.props.changeRoute('signup')}}>Sign up</FlatButton>
                        </Form>
                    </StyleCol>
                </Row>
            </Container>
        );
    }
}

export default Login;