import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navigation extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            COVID-19
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto">
                                <Link className="nav-link active" to="/cases">
                                    Casos
                                </Link>
                                <Link className="nav-link" to="/aboutus">
                                    About Us
                                </Link>

                            </div>
                        </div>

                    </div>

                </nav>
                
                
        )
    }
}

