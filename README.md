# lab-14
lab 14

### Author: Student/Group Name
Jeff


### Links and Resources
* [submission PR](https://github.com/jeff-401-js/lab-14/pull/1)
* [travis](https://www.travis-ci.com/jeff-401-js/lab-14)
* [heroku](https://fierce-tundra-51744.herokuapp.com/)

#### Documentation
* [UML](https://photos.app.goo.gl/cvPCpcn4SpdhPJ5TA)
* [JSDOC](https://fierce-tundra-51744.herokuapp.com/docs)
* [Swagger](https://fierce-tundra-51744.herokuapp.com/api-docs)


#### Modules
* `index.js`
* `src folder`
*   * `auth folder`
*   * * `oauth folder`
*   * * * `google.js` - `exports - authorize`
*   * * `routes folder`
*   * * * `routes.js` - `exports - newRouter`
*   * * `middleware.js` - `exports - auth`
*   * * `roles-model.js` - `exports - rolesSchema`
*   * * `router.js` - `exports - authRouter`
*   * * `users-model.js` - `exports - usersSchema`
*   * * `utils.js` - `exports - utils object containing authbearer, authbasic and authenticate`
*   * `middleware folder`
*   * * `404.js` - `exports - 404 error`
*   * * `500.js` - `exports - 500 error`
*   * `app.js`


### Setup
*  `npm i`

#### `.env` requirements
* `PORT` - 3000
* `SECRET` - somestring
* `MONGODB_URI` - mongodb://localhost:27017/clsdfssdf
* `EXPIRE_TIME` - 15m
* `SINGLE_USE_TOKENS` - false
* `GOOGLE_CLIENT_ID` - lkjlkjlkjkl
* `GOOGLE_CLIENT_SECRET` - ljlkjljljk

* `server restart may be required occasionally`

* `Add Roles with capabilities to db by going to --> localhost:3000/role in postman then adding`

{
	"role": "user",
	"capabilities": ["read"]
}

{
	"role": "editor",
	"capabilities": ["create", "read", "update"]
}

{
	"role": "admin",
	"capabilities": ["create", "read", "update", "delete", "superuser"]
}


#### Running the app

* `npm start`

* Endpoint: `/role`
  * allows adding of roles through this route and postman
* Endpoint: `/signup`
  * route to signup a new user with a username, pwd, email and role/capabilities
* Endpoint: `/signin`
  * route to signin a user with username and pwd
* Endpoint: `/oauth`
  * route to authenticate user throug oauth using their google login info
* Endpoint `/public-stuff`
  * public stuff route no auth required
* Endpoint `/hidden-stuff`
  * hidden stuff route basic auth required
* Endpoint `/something-to-read`
  * auth route that requires "read" auth
* Endpoint `/create-a-thing`
  * create route that requires "create" auth
* Endpoint `/update`
  * update route that requires "update" auth
* Endpoint `/jp`
  * patch/update route that requires "update" auth
* Endpoint `/bye-bye`
  * delete route that requires "delete" auth
* Endpoint `/everything`
  * get all route that requires "superuser" auth

#### Tests
* How do you run tests?
* `npm test` `filename`
