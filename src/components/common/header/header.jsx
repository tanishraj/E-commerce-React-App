import React, { Component } from 'react'
import LogoImage from './common/logo'
import Navbar from './common/navbar'
import Sidebar from './common/sidebar';
import Topbar from './common/topbar';

export default class Header extends Component {

    componentDidMount() {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display:none";
        }, 2000);
    }


    opoenNav = () => {
        var closemyslide = document.getElementById("mySidenav");
        if (closemyslide) {
            closemyslide.classList.add('open-side');
        }
    }
    render() {
        return (
            <div>
                <header id="sticky" className="sticky">

                    <div className="mobile-fix-option"></div>
                    {/*Top Header Component*/}
                    <Topbar />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="main-menu">
                                    <div className="menu-left">
                                        <div className="navbar">
                                            <a href="javascript:void(0)" onClick={this.opoenNav} >
                                                <div className="bar-style"> <i className="fa fa-bars sidebar-bar" ariahidden="true"></i></div>
                                            </a>
                                            {/*SideBar Navigation Component*/}
                                            <Sidebar />
                                        </div>
                                        <div className="brand-logo">
                                            <LogoImage logo={this.props.logoName} />
                                        </div>
                                    </div>
                                    <div className="menu-right pull-right">
                                        {/*Top Navigation Bar Component*/}
                                        <Navbar />
                                        <div>
                                            <div className="icon-nav">
                                                <ul>
                                                    <li className="onhover-div mobile-setting">
                                                        <div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/setting.png`} className="imgfluid" alt="" />
                                                            <i className="fa fa-cog"></i></div>
                                                        <div className="show-div setting">
                                                            <h6>language</h6>
                                                            <ul>
                                                                <li><a href={null} >English</a> </li>
                                                                <li><a href={null} >Hindi</a> </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
