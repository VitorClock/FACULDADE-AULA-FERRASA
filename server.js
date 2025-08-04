import agenda from "./db.js";
import express from 'express' ;

const app = express();
app.use(express.json());

app.get('/', function listar(req, res) {
     res.status(200).send(agenda)
} );
    
app.get('/:id', (request, response) => {


const id = parseInt (request.params.id);
const contato = agenda.find((c) => c.id ===id);

if(contato) {
  response.status(200).send(contato);
} else {
  response.status(404).send({mens: "Contato nao encontrado"});
  return;
}
});

app.post('/', (req, res) => {
  const contato = req.body;

  agenda.push(contato);
  
  res.status(201).send(contato);
});
    app.listen(3000);

    console.log('Agenda - API WEB executando');