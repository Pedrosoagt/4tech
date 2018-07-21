import React, { Component } from 'react';
import Card from './Card';

class JobList extends Component {
    constructor () {
        super();
    }

    jobRemoveHandler = (id) => {
        window.confirm(`Deseja realmente excluir essa vaga id: ${id}?`);
    }

    jobUpdateHandler = (id) => {
        window.alert(`Item atualizado id: ${id}`);
    }

    render () {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                        <Card
                            updateHandler={() => this.jobUpdateHandler(1)}
                            removeHandler={() => this.jobRemoveHandler(2)}
                        ></Card>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <Card
                        updateHandler={() => this.jobUpdateHandler(1)}
                        removeHandler={() => this.jobRemoveHandler(1)}
                    ></Card>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <Card
                        updateHandler={() => this.jobUpdateHandler(1)}
                        removeHandler={() => this.jobRemoveHandler(1)}
                    ></Card>
                    </div>
                    {/* {props.children} */}
                </div>
            </div>
        )
    }
}

export default JobList;