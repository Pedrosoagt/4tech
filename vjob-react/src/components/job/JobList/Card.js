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
                <h5 className="card-title">{props.vaga.name}</h5>
                <b>Descrição:</b>
                <p className="card-text">{props.vaga.description}</p>
                <b>Salário Base:</b>
                <p>{props.vaga.salary}</p>
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