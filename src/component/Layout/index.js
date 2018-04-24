import React, { Component } from 'react';
import Imenu from './component/Imenu'
import { Container, Row, Col } from 'reactstrap';
import Styled from 'styled-components';

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
                            <Imenu changeRoute={this.props.changeRoute}></Imenu>
                            {this.props.children}
                        </div>
                    </StyleApp>
                </Row>
            </Container>
        );
    }
}

export default Layout;