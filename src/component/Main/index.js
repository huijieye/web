import React, { Component } from 'react';
import FlatButton from 'material-ui/Button';
import { Button } from 'reactstrap';
import Icon from 'material-ui/Icon';
import axios from "axios/index";
import { Container, Row, Col } from 'reactstrap';
import Avatar from 'material-ui/Avatar';
import Styled from 'styled-components';


const StyleBody = Styled(Col)`
    background:white;
`;

const StyleAvatar = Styled(Avatar)`
        margin: 10px;
        width: 60px!important;
        height: 60px!important;
        color: '#fff';
        margin:auto;
        margin-top:20px;
        margin-bottom:40px;
`;

const StyleButton = Styled(Button)`
    width:100%;
`


class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            idCall: null
        }
        this.help = this.help.bind(this)
        this.stop = this.stop.bind(this)
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
        return (
            <Container>
                <Row>
                    <StyleBody sm={{ size: 6, order: 0, offset: 3 }}>
                        <div>
                            <Row>
                                <Col sm={{ size: 3, oder:0 , offset: 4 }}>
                                    <StyleAvatar>{first_name}</StyleAvatar>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <StyleButton color="success" onClick={this.help}>Call <Icon>call</Icon></StyleButton>
                                </Col>
                                <Col>
                                    <StyleButton color="danger" onClick={this.stop}>Stop Call <Icon>call_end</Icon></StyleButton>
                                </Col>
                            </Row>
                        </div>
                    </StyleBody>
                </Row>
            </Container>
            );
    }
}

export default Main;