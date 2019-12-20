const express = require('express')

const app = express()

app.use('/add-product', (req, res, next) => {
  console.log("In another middleware");

  res.send(
    '<form><input type="text" name="title"><button type="submit">Add Product</button></form>'
  )
})

app.use('/', (req, res, next) => {
  console.log("In another middleware");
  res.send('<h1>Hello from Express</h1>')

})

app.listen(3333)

