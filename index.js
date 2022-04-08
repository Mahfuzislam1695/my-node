const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
// const handler = (req, res) => {
//     res.send('Hello from node')
// }

//app.get('/',handler);

app.get('/', (req, res) => {
    res.send('Hello from node')
})

const users =[
    { id: 0, name: 'John', email: 'jon@gmail.com', phone: '123-456-1234' },
    { id: 1, name: 'rohan', email: 'rohan@gmail.com', phone: '123-456-1234' },
    { id: 2, name: 'muqit', email: 'muqit@gmail.com', phone: '123-456-1234' },
    { id: 3, name: 'xeem', email: 'xeem@gmail.com', phone: '123-456-1234' },
    { id: 4, name: 'lemon', email: 'lemon@gmail.com', phone: '123-456-1234' },
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser)
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