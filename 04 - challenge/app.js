/**
 * 1 - Create a NPM project and install Express.js (Nodemon if you want)
 * 2 - Create an Express.js app which serves two HTML files (of your choice/with
 *  your content) for / and /users.
 * 3 - Add some static (.js or .css) files to your project that should be 
 * required by at least one of your HTML files.
 *
 */

const express = require('express')
const main = require('./routes/main')
const app = express()

app.use(main)

app.listen(4444)