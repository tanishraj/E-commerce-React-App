import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

export default class breadcrumb extends Component {
    render() {
        const { title, parent } = this.props;
        return (
            <Fragment>
                <div className="breadcrumb-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="page-title">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <nav aria-label="breadcrumb" className="themebreadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`} >Home</Link></li>
                                        {
                                            parent ?
                                                <li className="breadcrumb-item" ariacurrent="page">{parent}</li> : ''
                                        }
                                        <li className="breadcrumb-item active" ariacurrent="page">{title}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
