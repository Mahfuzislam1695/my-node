const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// const handler = (req, res) => {
//     res.send('Hello from node')
// }

//app.get('/',handler);

const users =[
    { id: 0, name: 'John', email: 'jon@gmail.com', phone: '123-456-1234' },
    { id: 1, name: 'rohan', email: 'rohan@gmail.com', phone: '123-456-1234' },
    { id: 2, name: 'muqit', email: 'muqit@gmail.com', phone: '123-456-1234' },
    { id: 3, name: 'xeem', email: 'xeem@gmail.com', phone: '123-456-1234' },
    { id: 4, name: 'lemon', email: 'lemon@gmail.com', phone: '123-456-1234' },
]

app.get('/', (req, res) => {
    res.send('Hello from node')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits/mangoes/harivanga', (req, res) => {
    res.send('misti am');
})

app.listen(port, ()=>{
    console.log('listening to port', port);
})