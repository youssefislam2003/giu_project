const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const Knex = require('knex');

const config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5000,
    user: 'newuser',///Hena t7ot el username
    password: 'password', ///Hena t7ot el password
    database: 'n' ///Hena el database name
  }
};
const knex = Knex(config)
const store = new KnexSessionStore({
  knex,
  tablename: 'sessions', // optional. Defaults to 'sessions'
});

module.exports = { store, session, knex }