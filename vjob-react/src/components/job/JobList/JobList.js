import React, { Component } from 'react';
import Card from './Card';

import vagas from '../../../assets/jobs';

class JobList extends Component {

    state = {
        jobs: [],
        selectedId: null
    }

    constructor () {
        super();
    }

    componentDidMount() {
        this.setState({ jobs: vagas });
    }

    jobRemoveHandler = (id, name) => {
        window.confirm(`Deseja realmente excluir essa vaga id: ${name}?`);
    }

    jobUpdateHandler = (id) => {
        window.alert(`Item atualizado id: ${id}`);
    }

    render () {

        let vagasEncontradas = 
            this.state.jobs.map(vaga => {
                return <Card 
                    name={vaga.name}
                    description={vaga.description}
                    salary={vaga.salary}
                    area={vaga.area}
                    updateHandler={() => this.jobUpdateHandler(vaga.id)}
                    removeHandler={() => this.jobRemoveHandler(vaga.id, vaga.name)}
                ></Card> 
            })

        return (
            <div className="container">
                <div className="row"> 
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                        {vagasEncontradas}
                    </div>
                    {/* {props.children} */}
                </div>
            </div>
        )
    }
}

export default JobList;