import React, { Component } from 'react';
import Card from './Card';
import vagas from '../../../assets/jobs';
import Load from '../../navigation/Loading/Loading.js'

class JobList extends Component {

    state = {
        jobs: [],
        loading: true
    }

    constructor () {
        super();
    }

    componentDidMount() {
        this.setState({ jobs: vagas, loading: false });
    }

    jobRemoveHandler = (id, name) => {
        window.confirm(`Deseja realmente excluir essa vaga ${name}?`);
    }

    jobUpdateHandler = (id) => {
        window.alert(`Item atualizado id: ${id}`);
    }

    render () {
        if (this.state.loading == true)    {
            return <Load/>
        } 
        let vagasEncontradas = 
            this.state.jobs.map(vaga => {
                return (
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">    
                        <Card 
                            vaga = {vaga}
                            // name={vaga.name}
                            // description={vaga.description}
                            // salary={vaga.salary}
                            // area={vaga.area}
                            updateHandler={() => this.jobUpdateHandler(vaga.id)}
                            removeHandler={() => this.jobRemoveHandler(vaga.id, vaga.name)}
                        ></Card>
                    </div>
                ) 
            })

        return (
            <div className="row"> 
                {vagasEncontradas}
            </div>
        )
    }
}

export default JobList;