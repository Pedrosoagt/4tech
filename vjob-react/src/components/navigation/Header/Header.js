import React from 'react';
import logo from '../../../assets/images/logo-vjobs.png';

const header = () => (
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
                    <a className="nav-link text-white" href="#">Vagas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>
)

export default header;