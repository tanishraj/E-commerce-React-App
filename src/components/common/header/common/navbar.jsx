import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            navClose: { right: '0px' }
        };
    }

    openNav = () => {
        this.setState({ navClose: { right: '0px' } });
    }

    closeNav = () => {
        this.setState({ navClose: { right: '-410px' } });
    }

    render() {
        return (
            <div>
                <div>
                    <div className="main-navbar">
                        <div id="mainnav">
                            <div className="toggle-nav" onClick={this.openNav}>
                                <i className="fa fa-bars sidebar-bar"></i>
                            </div>
                            <ul className="nav-menu">
                                <li className="back-btn" onClick={this.closeNav} >
                                    <div className="mobile-back text-right">
                                        <span >Back</span>
                                        <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                                    </div>
                                </li>
                                <li>
                                    <Link to="#" className="nav-link" >home</Link>
                                </li>
                                <li >
                                    <Link to="#" className="nav-link" >shop</Link>
                                    <span className="sub-arrow"></span>
                                    <ul className="nav-submenu">
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection/men`} >Men-Fashion</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/Women-Fashion/women`} >Men-Fashion</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <Link to="#" className="nav-link" >pages
                                    <span className="sub-arrow"></span>
                                    </Link>
                                    <ul className="nav-submenu">
                                        <li><Link to={`${process.env.PUBLIC_URL}/pages/about-us`} >About Us</Link></li>
                                        <li><Link to={`${process.env.PUBLIC_URL}/pages/faq`} >faq</Link></li>
                                        <li><Link to={`${process.env.PUBLIC_URL}/pages/contact-us`} >Contact Us</Link></li>
                                        <li><Link to={`${process.env.PUBLIC_URL}/pages/register`} >Register</Link></li>
                                        <li><Link to={`${process.env.PUBLIC_URL}/pages/login`} >Login</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
