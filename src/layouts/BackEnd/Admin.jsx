import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Sidebar from '../../components/BackEnd/Sidebar/Sidebar'
import TopNavBar from '../../components/BackEnd/NavBars/TopNavBar'
import Footer from '../../components/BackEnd/Footer/Footer'
import {adminRoutes as routes} from '../../routes';
import NotFound from '../../views/BackEnd/NotFound';
import {loadUser} from '../../_actions/authActions';

class Admin extends Component { 
    constructor(props) {
        super(props);
        console.log('Admin Layout Props', props);
    }

    static propTypes = {
      isAuthenticated: PropTypes.bool,
      loadUser: PropTypes.func.isRequired
  }

    componentDidMount(){
      console.log('admin-layout-mount');
        //trigger when directly hit the admin URL on browser - check if authenticated and token is valid
        this.props.loadUser();
    }
    
    componentDidUpdate(e) {
      console.log('admin-layout-update');
       //trigger when hit via sidebar links or other links  - check if authenticated and token is valid    
       this.props.loadUser();
        if (
          window.innerWidth < 993 &&
          e.history.location.pathname !== e.location.pathname &&
          document.documentElement.className.indexOf("nav-open") !== -1
        ) {
          document.documentElement.classList.toggle("nav-open");
        }
    }

    getViewName = path => {
        for (let i = 0; i < routes.length; i++) {
          if (
            this.props.location.pathname.indexOf(
              routes[i].layout + routes[i].path
            ) !== -1
          ) {
            return routes[i].name;
          }
        }
        return "";
      };

    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route exact
                        path={prop.layout + prop.path}
                        render={props => (<prop.component {...props}/>)}
                        key={key}/>
                );
            } else {
                return null;
            }
        });
    };

    render() {
        return (
          <>
          {/* localStorage.getItem('token') == null ? this.props.history.push('/admin/login') : null */}
          { localStorage.getItem('token') == null ? <Redirect to={{ pathname: '/admin/login' }} /> : 
            <div className="wrapper">
                <Sidebar {...this.props} routes={routes}/>
                <div id="main-panel" className="main-panel" ref="mainPanel">
                    <TopNavBar {...this.props} viewName={this.getViewName(this.props.location.pathname)}/>
                    <Switch>
                      {this.getRoutes(routes)}
                      <Route component={NotFound} />
                    </Switch>
                    <Footer/>
                </div>
            </div>
          }
            </>
        )
    }
}


//loaderUser - Can be used via props here and disptach can be used in loadUser
export default connect(null, {loadUser})(Admin);