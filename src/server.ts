import express, { request, response } from 'express';

const  app = express();

const users = [
    'Prince',
    'Franscisca',
    'Marta',
    'Josefa'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users:id', (request, response) => {
    const id = Number(request.params.id);
    
    const user = users[id];

});

app.post('/users', (request, response) => {
    const user = {
        name: 'Prince',
        email: 'prince@prince.com.br'
    };

    return response.json(user);
});

app.listen(3333);