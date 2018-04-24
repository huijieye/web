import React, { Component } from 'react';
import FlatButton from 'material-ui/Button';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import StyleCol from '../style/LoginCol'
import Title from '../style/Title'

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

        return( <Container>
            <Row>
                <Col sm="12" md={{ size: 4, offset: 4 }}><Title >Se connecter</Title></Col>
            </Row>
            <Row>
                <StyleCol sm="12" md={{ size: 6, offset: 3 }}>
                    <Form>
                        <FormGroup>
                            <Label>Identifiant</Label>
                            <Input type="text" ref={(input)=>this.loginInput=input} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Nom</Label>
                            <Input type="text" ref={(input)=>this.nameInput=input} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Excuse</Label>
                            <Input type="text" ref={(input)=>this.excuseInput=input} />
                        </FormGroup>

                        <Button onClick={this.addUser}>Submit</Button>
                        <FlatButton label="primary" onClick={()=>{this.props.changeRoute('')}}>Retour</FlatButton>
                    </Form>
                </StyleCol>
            </Row>
        </Container>);
    }
}

export default Signup;