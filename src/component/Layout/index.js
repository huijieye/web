import React, { Component } from 'react';
import Imenu from './component/Imenu'
import { Container, Row, Col } from 'reactstrap';
import Styled from 'styled-components';
import {connect} from "react-redux";

const StyleApp = Styled(Col)`
    background:#e5ffef;
`;

class Layout extends Component {

    render(){
        return (
            <Container>
                <Row>
                    <StyleApp>
                        <div>
                            {
                                this.props.user.userInfo != null ?
                                    <Imenu changeRoute={this.props.changeRoute}></Imenu> : null
                            }
                            {this.props.children}
                        </div>
                    </StyleApp>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user:state.user
    }
}

export default connect(mapStateToProps)(Layout);