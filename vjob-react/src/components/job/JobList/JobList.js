import React, { Component } from 'react';
import Card from './Card';
import vagas from '../../../assets/jobs'; //json(bd) não mais usado 
import Load from '../../navigation/Loading/Loading.js';
import Formulario from '../../../components/job/InputJob/InputJob'
import Collapse from  '../../../hoc/Collapse/Collapse'


import axios from 'axios';

class JobList extends Component {

    state = {
        jobs: [],
        loading: true
    }

    // constructor () {
    //     super();
    // }

    addItemToList = (newItem) => {
        let currentJobs = this.state.jobs;
        currentJobs.push(newItem);

        this.setState({jobs: currentJobs});
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

    jobRemoveHandler = async (id, name) =>{

        // if (window.confirm(`Deseja realmente excluir essa vaga ${name}?`)) {
        //     await axios.delete('/jobs/' + id)
        //     .then( response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     })
        // }

        //method delete Adriano ()
        const axiosConfig = {
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            }
        }

        if (window.confirm(`Deseja deletar esta vaga: ${name}`)) {
            axios.delete('/jobs/' + id)
                .then(res => {
                    let vagasAtualizadas = this.state.jobs;
                    const indiceRemovido = vagas.findIndex(item => item.id == id );

                vagasAtualizadas.splice(indiceRemovido, 1);
                this.setState({jobs: vagasAtualizadas})
            })
            .catch(error =>  {
                if(error.res.status == 401)
                    alert('Não autorizado');
                console.error(`cheguei aqui, pq?`);
            })
        }
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
            <div>
                <Collapse>
                    <Formulario addToList={this.addItemToList}/>
                </Collapse>
                <div className="row"> 
                    {vagasEncontradas}
                </div>
            </div>
        )
    }
}

export default JobList;