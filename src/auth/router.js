'use strict';

const express = require('express');
const authRouter = express.Router();
const Role = require('./roles-model.js');
const User = require('./users-model.js');
const auth = require('./middleware.js');
const oauth = require('./oauth/google.js');


// multi capabilities at the same time
// const capabilities = {
//   admin: ['create', 'read', 'update', 'delete', 'superuser'],
//   editor: ['create', 'read', 'update'],
//   user: ['read'],
// };

// Object.keys(capabilities).map(role => {
//   let saves = [];
//   let newRecord = new Role({role, capabilities: capabilities[role]});
//   saves.push(newRecord.save);
// });
// Promise.all(saves);

authRouter.post('/role', (req, res, next) => {

  let role = new Role(req.body);
  role.save()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(next);
});

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    })
    .catch(next);
});

authRouter.post('/signin', auth(), (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

authRouter.get('/oauth', (req,res,next) => {
  oauth.authorize(req)
    .then( token => {
      res.status(200).send(token);
    })
    .catch(next);
});

authRouter.post('/key', auth, (req,res,next) => {
  let key = req.user.generateKey();
  res.status(200).send(key);
});

module.exports = authRouter;
