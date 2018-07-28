import React from 'react';
import logo from '../../../assets/images/logo-vjobs.png';
import { Link } from 'react-router-dom'

const header = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark">
        <a className="navbar-brand" href="#">
            <img src={logo} style={{height:"50px"}}></img>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="vagas">Vagas</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="about">Sobre</Link>
                </li>
            </ul>
        </div>
        {/* tem algo aqui que eu esquici!!! () */}
        <a className="nav-item nav-link text-white"/>
        <a className="nav-item nav-link text-white" onClick={() => props.logout()}>
            <i className="fas fa-sign-out-alt"/>
        </a>
    </nav>
)

export default header;