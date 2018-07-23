import React from 'react'

const collapse = (props) => (
    <div>
        <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" role="button">Nova Vaga</a>
        <div className="collapse mb-3" id="collapseExample">
            <br/>
            <div className="card card-body">
                {props.children}
            </div>
        </div>
    </div>
)

export default collapse;