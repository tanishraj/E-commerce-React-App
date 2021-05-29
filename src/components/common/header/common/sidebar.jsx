import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    closeNav = () => {
        var closemyslide = document.getElementById("mySidenav");
        if (closemyslide) {
            closemyslide.classList.remove('open-side');
        }
    }

    render() {
        return (
            <div id="mySidenav" className="sidenav">
                <a href="javascript:void(0)" className="sidebar-overlay" onClick={this.closeNav} ></a>
                <nav>
                    <a onClick={this.closeNav} >
                        <div className="sidebar-back text-left">
                            <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
            </div>
                    </a>
                    <ul id="sub-menu" className="sidebar-menu">
                        <li>
                            clothing
            <span className="sub-arrow"></span>
                            <ul className="mega-menu clothing-menu">
                                <li>
                                    <div className="row m-0">
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>women's fashion</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="#" >dresses</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" >skirts</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" >westarn wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" >ethic wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" >sport wear</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="link-section">
                                                <h5>men's fashion</h5>
                                                <ul>
                                                    <li>
                                                        <Link to="#" >sports wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" >western wear</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" >ethic wear</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }
}
