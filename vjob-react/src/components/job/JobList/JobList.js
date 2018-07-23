import React, { Component } from 'react';
import Card from './Card';
import vagas from '../../../assets/jobs'; //json(bd) não mais usado 
import Load from '../../navigation/Loading/Loading.js'
import axios from 'axios'

class JobList extends Component {

    state = {
        jobs: [],
        loading: true
    }

    constructor () {
        super();
    }

    componentDidMount() {
        // this.setState({ jobs: vagas, loading: false });
        axios.get('/jobs')
            .then( response => {
                this.setState({jobs: response.data, loading: false});
            })
            .catch(error => {
                console.error(error);
            })
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
            this.state.jobs.map((vaga, index) => {
                return (
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">    
                        <Card 
                            key={index}
                            vaga={vaga}
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