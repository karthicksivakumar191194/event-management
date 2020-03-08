import React, {Component} from "react";
import {NavItem, Nav} from "react-bootstrap";

export default class TopNavBarLinks extends Component {
    render() {
        return (
            <div>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Log out
                    </NavItem>
                </Nav>
            </div>
        );
    }
}
