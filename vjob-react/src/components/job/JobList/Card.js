import React from 'react';

import dev from '../../../assets/images/developer.png';
import designer from '../../../assets/images/designer.png';
import tester from '../../../assets/images/tester.png';

const card = (props) => {
    let imagem = null;

    return (
        <div className="card" style={{width:"22rem"}}>
            <img className="" src={dev} alt="Card image cap" height="180"/>
            <div className="card-body">
                <h5 className="card-title">Desenvolvedor Front-end JR</h5>
                <b>Descrição:</b>
                <p className="card-text">Profissional que goste de trabalhar em um ambiente dinâmico com desenvolvimento de software e que tenha experiência em desenvolvimento full stack.</p>
                <b>Salário Base:</b>
                <p>R$ 10,00</p>
                <a href="" className="btn btn-warning" onClick={props.updateHandler}>
                    <i className="fas fa-edit"></i>
                </a>
                <a href="" className="btn btn-danger" onClick={props.removeHandler}>
                    <i className="fas fa-times-circle"></i>
                </a>
            </div>
        </div>
    )
}

export default card;