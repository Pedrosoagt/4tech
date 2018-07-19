const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const Vaga = require('./model/vaga.js');

let vagas = require('./config/vagas.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    return res.send('Hello world!');
})

app.get('/vagas', async (req, res) => {
    return res.send(vagas);
})

app.get('/vagas/:id', async (req, res) => {
    let idFind = req.params.id;
    let count = vagas.length;

    while (count > 0) {
        if (idFind == vagas[count-1].id) {
            return res.send(vagas[count-1]);
        }
        count--;
    }
})

app.post('/vagas', async (req, res) => {
    try {
        let vagasLength = vagas.length;
        let vaga = createVaga(req.body);
        vagas.push(vaga);
        if (vagas.length > vagasLength) return res.send('Added');
        return res.status(500).send('Este Internal error');
    } catch(error) {
        return res.status(500).send('não pode ser... internal error');
    }
})

app.put('/vagas:id', async (req, res) => {
    let findId = req.params.id;
})

app.put('/vagas:id', async (req, res) => {
    try {
        if(!req.body) {
            return res.status(403).send('Para alterar um usuário, é necessário passar algum valor.');
        }
        let index = await vagas.findIndex(vaga => vaga.id === req.params.id);
        if (index >= 0) {
            Object.keys(req.body).forEach(vaga => {
                vagas[index][job] = req.body[vaga]
            })
            return res.send(`Vaga com id ${req.params.id} alterada com sucesso`)
        }
        return res.send(`nao foi encontrada vaga com esse id`)
    }catch(error) {
        return res.status(500).send('Internal error')
    }
})

app.delete('/vagas:id', async (req, res) => {
    let findId = req.params.id;
    let count = vagas.length;

    while (count > 0) {
        if (vagas[count-1].id == findId){
            vagaIndex = vagas;
        }
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

const createVaga = (obj) => new Vaga(
    obj.id, obj.name, obj.description, 
    obj.skills, obj.salary, obj.area, 
    obj.differentials, obj.isPcd, 
    obj.isActive
)
