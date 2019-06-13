'use strict';

const express = require('express');
const User = require('../users-model.js');
const auth = require('../middleware.js');
const oauth = require('../oauth/google.js');

const newRouter = express.Router();

newRouter.get('/public-stuff', (req, res, next) => {
  res.status(200).send('Message for you sir!');
});

newRouter.get('/hidden-stuff', auth(), (req, res, next) => {
  res.status(200).send('This parrot is dead!');
});

newRouter.get('/something-to-read', auth(), (req, res, next) => {
  res.send(200).send('No one expects the inquestion');
});

newRouter.post('/create-a-thing', auth(), (req, res, next) => {
  res.send(200).send('you made a thing');
});

newRouter.put('/update', auth(), (req, res, next) => {
  res.send(200).send('you updated a thing');
});

newRouter.patch('/jp', auth(), (req, res, next) => {
  res.send(200).send('jpjpjpjp');
});

newRouter.delete('/bye-bye', auth(), (req, res, next) => {
  res.send(200).send('deleted');
});

newRouter.get('/everything', auth(), (req, res, next) => {
  res.send(200).send('deleted');
});