'use strict';

const Job = require('../../model/job.js');

module.exports = app => {

    const jobsCollection = app.config.firebaseConfig.collection('jobs');

    app.get('/jobs', async (req, res) => {
        try {
            const docs = await jobsCollection.get();
            let jobs = [];
            docs.forEach(doc => {
                jobs.push(extractJob(doc));
            })
            return res.send(jobs);
        }catch(error) {
            return res.status(500).send('error');
        }
    })

    app.get('/jobs/:id', async (req, res) => {
        try {
            const getUrlId = req.params.id;
            const findJob = await jobsCollection.doc(getUrlId).get();

            if(findJob) {
                return res.send(extractJob(findJob));
            } else {
                return res.send(`nenhum job com id: ${getUrlId}`);
            }
        } catch (error) {
            return res.status(500).send(error);
        }
    })

    app.post('/jobs', async (req, res) => {
        try {
            const fbReturn = await jobsCollection.doc().set(req.body);

            if (fbReturn) {
                return res.send('success');
            } else {
                throw Error;
            } 
        } catch(error) {
            return res.status(500).send(error);
        }
    })

    app.put('/jobs/:id', async (req, res) => {
        try {
            if (!req.body) {
                return res.status(403).send('Para alterar um usuário, é necessário passar algum valor');
            }
            const jobDoc = await jobsCollection.doc(req.params.id).update(req.body);
            if (jobDoc) {
                return res.send(`Vaga ${req.params.id} foi atualizada com sucesso!`);
            } else {
                return res.send(`A vaga ${req.params.id} não foi encontrada`);
            }
        } catch (error) {
            return res.status(500).send(error);
        }
    })

    app.delete('/jobs/:id', async (req, res) => {
        try {
            const getId = req.params.id;
            const del = await jobsCollection.doc(getId).delete();

            if (del) {
                return res.send(`A vaga com o id ${getId} foi excluída com successo`);
            } else {
                return res.send(`Vaga com o id ${getId} não encontrada`)
            }  
        }catch (error) {
            return res.status(500).send(error);
        }
    })

    const extractJob = (job) => {
        let v = job.data();

        return {
            id: job.id,
            name: v.name,
            description: v.description,
            skills: v.skills, 
            salary: v.salary, 
            area: v.area, 
            differentials: v.differentials, 
            isPcd:  v.isPcd, 
            isActive: v.isActive 
        }
    }

    const createJob = (job) => new Job(
        obj.id, 
        obj.name, 
        obj.description,
        obj.skills, 
        obj.salary, 
        obj.area, 
        obj.differentials, 
        obj.isPcd, 
        obj.isActive 
    )
}

//funcoes antigas

 // app.get('/jobs', async (req, res) => {
    //     return res.send(jobs);
    // })

// app.get('/jobs/:id', async (req, res) => {
    //     return res.send(jobs.find(el => el.id === req.params.id));
    // })

// app.post('/jobs', async (req, res) => {
    //     try {
    //         let jobsLength = jobs.length;
    //         let job = createJob(req.body);
    //         jobs.push(job);
    //         if (jobs.length > jobsLength) return res.send('Adicionado com sucesso');
    //         return res.status(500).send('Ops! Aconteceu um erro tentando cadastrar a vaga.');
    //     } catch (error) {
    //         return res.status(500).send(error);        
    //     }
    // })

    // app.put('/jobs/:id', async (req, res) => {
    //     try {
    //         if (!req.body) {
    //             return res.status(403).send('Para alterar um usuário, é necessário passar algum valor');
    //         }
    //         let index = await jobs.findIndex(job => job.id === req.params.id);
    //         if (index >= 0) {
    //             Object.keys(req.body).forEach(job => {
    //                 jobs[index][job] = req.body[job]
    //             })
    //             return res.send(`Vaga com o id ${req.params.id} alterada com sucesso`);
    //         }
    //         return res.send("nao foi encontrado vaga com esse id");
    //     } catch (error) {
    //         return res.status(500).send(error);
    //     }
    // })

    // app.delete('/jobs/:id', (req, res) => {
    //     try {
    //         let length = jobs.length;
    //         jobs.splice(jobs.findIndex(el => el.id === req.params.id), 1);
    //         if (jobs.length < length) return res.send(`A vaga com o id ${req.params.id} com successo`);
    //         else return res.status(500).send(`Não foi possível deletar a vaga ${req.params.id}`);
    //     } catch (error) {
    //         return res.status(500).send(error);        
    //     }
    // })