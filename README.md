# Fireapp
- A barebones Node.js app using [Express 4](http://expressjs.com/).
- Users firebase for persistence

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone https://github.com/nishants/fireapp.git # or clone your own fork
$ cd fireapp
$ npm install
$ npm start # or npm run debug
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ git push heroku master
$ heroku open