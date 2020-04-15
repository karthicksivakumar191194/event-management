import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import logo from "../../../assets/BackEnd/img/reactlogo.png";
import sidebarImage from "../../../assets/BackEnd/img/sidebar-1.jpg"
import TopNavBarLinks from "../NavBars/TopNavBarLinks";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
          };
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }
    
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        const sidebarBackground = {
            backgroundImage: "url(" + sidebarImage + ")"
        };
        return (
            <div
                id="sidebar"
                className="sidebar"
                data-color="black"
                data-image={sidebarImage}>
                <div className="sidebar-background" style={sidebarBackground} ></div>
                <div className="logo">
                    {/*<a href="#" className="simple-text logo-mini">
                        <div className="logo-img">
                            <img src={logo} alt="logo_image"/>
                        </div>
                    </a>*/}
                    <a href="#" className="simple-text logo-normal">Event Management</a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {this.props.routes.map((prop, key) => {
                            if (!prop.redirect && !prop.invisible)
                                return (
                                    <li
                                        className={prop.upgrade ? "active active-pro": this.activeRoute(prop.layout + prop.path)}
                                         key={key}
                                    >
                                        <NavLink
                                            to={prop.layout + prop.path}
                                            className="nav-link"
                                            activeClassName="active"
                                        >
                                            <i className={prop.icon} />
                                            <p>{prop.name}</p>
                                        </NavLink>
                                    </li>
                                );
                            return null;
                         })}                
                         {/* If window width is less than 992, add Top Nav Links(Eg. LogOut) to the mobile menu */}     
                         {this.state.width <= 991 ? <TopNavBarLinks /> : null}   
                    </ul>
                </div>
            </div>
        )
    }
}