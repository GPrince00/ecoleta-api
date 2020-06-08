import express, { request, response } from 'express';

const  app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Prince',
        'Franscisca',
        'Marta'
    ]);
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Prince',
        email: 'prince@prince.com.br'
    };

    return response.json(user);
});

app.listen(3333);