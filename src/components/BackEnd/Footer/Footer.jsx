import React, {Component} from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <p className="copyright pull-right">
                        &copy; {new Date().getFullYear()}{" "}
                        <a href="#">Event Management</a>
                    </p>
                </div>
            </footer>
        )
    }
}