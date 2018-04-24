import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import Icon from 'material-ui/Icon';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import { Container, Row, Col } from 'reactstrap';

const ITEM_HEIGHT = 48;

class Imenu extends Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };



    render() {
        const { anchorEl } = this.state;

        return (
            <Container>
                <Row>
                    <Col sm={{ size: 9, order: 5, offset: 3 }}>
                        <div>
                            <IconButton
                                aria-label="More"
                                aria-owns={anchorEl ? 'long-menu' : null}
                                aria-haspopup="true"
                                onClick={this.handleClick}
                            >
                                <Icon>menu</Icon>
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: 200,
                                    },
                                }}
                            >
                                <MenuItem onClick={()=>{this.setState({ anchorEl: null }); this.props.changeRoute('profil')}}>
                                    <ListItemIcon >
                                        <Icon>perm_identity</Icon>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Profil"/>
                                </MenuItem>
                                <MenuItem onClick={()=>{this.setState({ anchorEl: null });this.props.changeRoute('main')}}>
                                    <ListItemIcon >
                                        <Icon>call</Icon>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Call"/>
                                </MenuItem>
                                <MenuItem onClick={()=>{this.setState({ anchorEl: null });this.props.changeRoute('answers')}}>
                                    <ListItemIcon >
                                        <Icon>hearing</Icon>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Answers"/>
                                </MenuItem>
                            </Menu>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Imenu;