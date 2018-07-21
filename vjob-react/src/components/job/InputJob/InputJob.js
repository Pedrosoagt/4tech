import React from 'react';
import Container from '../../layout/Container/Container';

const formulario = () => (
    <div className="container">
        <div class="card card-body">
            <form>
                <div className="form-group">
                    <label for="exampleInputText1">Nome</label>
                    <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputText1">Descrição</label>
                    <textarea rows="3" type="text" className="form-control" id="exampleInputText1"></textarea>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-md-6">
                        <div className="form-group">
                            <label for="exampleInputText1">Habilidades Necessárias</label>
                            <textarea rows="3" type="text" className="form-control" id="exampleInputText1"></textarea>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6">
                        <div className="form-group">
                            <label for="exampleInputText1">Diferencias</label>
                            <textarea rows="3" type="text" className="form-control" id="exampleInputText1"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-md-6">
                        <div className="form-group">
                            <label for="exampleInputText1">Salário Base</label>
                            <input type="text" className="form-control" id="exampleInputText1"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Vaga PCD</label>
                        </div>
                    </div>
                    <div className="col-xs-6 col-md-6">
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Área</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Desenvolvimento</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='text-right'>
                    <button type="submit" className="btn btn-success" onclick="">Criar Vaga</button>
                </div>
            </form>
        </div>
    </div>
)

export default formulario;
