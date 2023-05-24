# LAB - Class 07

## Project: Bearer auth

### Author: Ethan Storm

### Problem Domain

#### Phase 1

Deploy an Express server that implements [Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), with signup and sign-in capabilities, using a Postgres database for storage.

#### Phase 2

any user that has successfully logged in using basic authentication (username and password) is able to continuously authenticate … using a “token”

![LAB 7 UML](assets/Lab7.png)

### Links and Resources

[Github Actions](https://github.com/ShadowDraco/bearer-auth/actions)
[Backend deployment](https://frolic-bearer-auth.onrender.com)

### Collaboration

This server was adapted from a code fellows lab starter code

#### `.env` requirements

Port variable (PORT)
Postgres connection url (DATABASE_URL)
Secret (SECRET)

#### How to set up the application

make sure to have pgsql installed and ready to use
clone repo, fill out env file `npm i`, then run `node app.js` in the terminal

#### Routes

- Get: `/test` or `/` - to test

#### Tests

to run tests, after `npm i`, run `npm test`

[LAB 7 PR #1](https://github.com/ShadowDraco/bearer-auth/pull/1)
