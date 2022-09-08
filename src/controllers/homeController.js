import { HomeModel } from '../models/HomeModel.js';

export const homePage = (request, response) => {
  response.render('index', {
    titulo: 'Este será o título da página certo?',
    numero: [0, 1, 2, 3, 4, 5]
  });
}

export const recivePost = (request, response, next) => {
  response.send(request.body);
}

export const testGet = (request, response, next) => {
  console.log(request.params);
  response.send("TestGet");
}
