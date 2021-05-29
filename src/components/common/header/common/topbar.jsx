import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Topbar extends Component {
    render() {
        return (
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact">
                                <ul>
                                    <li> Sahosoft</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>call us :
           8376817046</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right">
                            <ul className="header-dropdown">
                                <li className="mobile-wishlist compare-mobile">
                                    <Link to={`${process.env.PUBLIC_URL}/compare`} >
                                        <i className="fa fa-random"
                                            aria-hidden="true"></i>compare
                                </Link> </li>
                                <li className="mobile-wishlist">
                                    <Link to={`${process.env.PUBLIC_URL}/wishlist`} >
                                        <i className="fa fa-heart" ariahidden="true"></i>wishlist
                                </Link>
                                </li>

                                <li className="onhover-dropdown mobile-account">
                                    <i className="fa fa-user" aria-hidden="true"></i> my account
            <ul className="onhover-show-div">
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/login`} >Login</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/register`} >Register</Link>
                                        </li>
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
