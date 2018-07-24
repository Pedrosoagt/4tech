import React, {Component} from 'react';
import Container from '../../layout/Container/Container';
import axios from 'axios';

class Formulario extends Component {
    state = {
        newJob: {}
    }

    postDataHandler = (event) => {
        let item = {
            ...this.state.newJob
        };

        axios.post('/jobs', item)
            .then((response) => {
                item.id = response.data;
                this.props.addToList(item);
            })
            .catch(() => {})

        event.preventDefault();
    }

    changeValueHandler = (nomeAtributo, valor) => {
        let currentJob = this.state.newJob;
        
        currentJob[nomeAtributo] = valor;

        this.setState({newJob: currentJob});
    }

    render () {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputText1">Nome</label>
                    <input onChange={(event) => this.changeValueHandler('name', event.target.value)} 
                        type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputText1">Descrição</label>
                    <textarea onChange={(event) => this.changeValueHandler('description', event.target.value)}
                        rows="3" type="text" className="form-control" id="exampleInputText1"></textarea>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputText1">Habilidades Necessárias</label>
                            <textarea onChange={(event) => this.changeValueHandler('skills', event.target.value)}
                                rows="3" type="text" className="form-control" id="exampleInputText1"></textarea>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputText1">Diferencias</label>
                            <textarea onChange={(event) => this.changeValueHandler('differentials', event.target.value)}
                                rows="3" type="text" className="form-control" id="exampleInputText1"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputText1">Salário Base</label>
                            <input onChange={(event) => this.changeValueHandler('salary', event.target.value)}
                                type="text" className="form-control" id="exampleInputText1"/>
                        </div>
                        <div className="form-group form-check">
                            <input onChange={(event) => this.changeValueHandler('isPCD', event.target.value)}
                                type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Vaga PCD</label>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Área</label>
                            <select onChange={(event) => this.changeValueHandler('area', event.target.value)}
                                className="form-control" id="exampleFormControlSelect1">
                                <option>Desenvolvimento</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='text-right'>
                    <button type="submit" className="btn btn-success" onClick={this.postDataHandler}>Criar Vaga</button>
                </div>
            </form>
        )
    }
} 

export default Formulario;
