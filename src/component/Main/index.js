import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Icon from 'material-ui/Icon';
import { Container, Row, Col } from 'reactstrap';
import Avatar from 'material-ui/Avatar';
import Styled from 'styled-components';
import {createProcess,deleteProcess} from '../../_commun/src/process/Call'
import {updateProcess} from '../../_commun/src/process/User'
import {connect} from 'react-redux';
import {setWatch} from '../../_commun/src/actions/User'

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
        this.stop = this.stop.bind(this);

        if(this.props.user.watch === null){
            console.log('watching')
            const watchId = navigator.geolocation.watchPosition((pos) => {
                const newUser = {
                    ...this.props.user.userInfo,
                    latitude:pos.coords.latitude,
                    longitude:pos.coords.longitude
                }
                updateProcess(this.props.dispatch,JSON.stringify(newUser))
            })
            this.props.dispatch( setWatch(watchId) )
        }
    }
    help(){
        createProcess(this.props.dispatch,this.props.user.userInfo.id)
    }

    stop(){
        deleteProcess(this.props.dispatch,this.props.call.call.id)
    }



    render(){

        const { first_name } = this.props.user.userInfo
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

export default connect()(Main);