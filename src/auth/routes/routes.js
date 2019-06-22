'use strict';

const express = require('express');
const User = require('../users-model.js');
const Role = require('../roles-model.js');
const auth = require('../middleware.js');
const oauth = require('../oauth/google.js');

const newRouter = express.Router();


newRouter.post('/role', (req, res, next) => {

  let role = new Role(req.body);
  role.save()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

newRouter.get('/public-stuff', (req, res, next) => {
  res.status(200).send('Message for you sir!');
});

newRouter.get('/hidden-stuff', auth(), (req, res, next) => {
  res.status(200).send('This parrot is dead!');
});

newRouter.get('/something-to-read', auth('read'), (req, res, next) => {
  res.status(200).send('No one expects the inquestion');
});

newRouter.post('/create-a-thing', auth('create'), (req, res, next) => {
  res.status(200).send('you made a thing');
});

newRouter.put('/update', auth('update'), (req, res, next) => {
  res.status(200).send('you updated a thing');
});

newRouter.patch('/jp', auth('update'), (req, res, next) => {
  res.status(200).send('jpjpjpjp');
});

newRouter.delete('/bye-bye', auth('delete'), (req, res, next) => {
  res.status(200).send('deleted');
});

newRouter.get('/everything', auth('superuser'), (req, res, next) => {
  res.status(200).send('deleted');
});

module.exports = newRouter;
