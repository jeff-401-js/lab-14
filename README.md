# lab-14
lab 14

### Author: Student/Group Name
Jeff

* [![Build Status](https://www.travis-ci.com/jeff-401-js/lab-04.svg?branch=dev)](https://www.travis-ci.com/jeff-401-js/lab-14)

### Links and Resources
* [submission PR](https://github.com/JeffLawrence1/lab-14/pull/1)
* [travis](https://www.travis-ci.com/jeff-401-js/lab-14)
* [heroku](https://fierce-tundra-51744.herokuapp.com/)

#### Documentation
* [UML](https://photos.app.goo.gl/cvPCpcn4SpdhPJ5TA)

### Setup
#### `.env` requirements
* `PORT` - 3000
* `SECRET` - somestring
* `MONGODB_URI` - mongodb://localhost:27017/class-13
* `EXPIRE_TIME` - 15m

#### Running the app
* `nodemon index.js`
* Endpoint: `/role`
  * sets up new role
* Endpoint: `/signup`
  * starter code endpoint not used in this project.
* Endpoint: `/signin`
  * starter code endpoint not used in this project.
* Endpoint: `/oauth`
  * authorization route
* Endpoint: `/roles`
  * initialize roles
* Endpoint `/public-stuff`
  * auth route
* Endpoint `/hidden-stuff`
  * hidden stuff
* Endpoint `/something-to-read`
  * read
* Endpoint `/create-a-thing`
  * create
* Endpoint `/update`
  * update
* Endpoint `/jp`
  * patch/update
* Endpoint `/bye-bye`
  * delete
* Endpoint `/everything`
  * get all

#### Tests
* How do you run tests?
npm test `filename.test.js`
