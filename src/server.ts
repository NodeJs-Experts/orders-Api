import express from 'express';
const app = express();
const port = process.env.PORT || 3333

app.use(express.json());

app.get('/', (request, response) => {
 const {
  name, 
  password, 
  email
} = request.body

return response.json({message: "Olá mundo"})
 
})

app.post('/', (request, response) => {
  const {
    name, 
    password, 
    email
  } = request.body
  console.log(password)
  return response.json({name})
})

app.listen(port, () => {
  console.log(`O Servidor foi iniciado na porta ${port}`);
})