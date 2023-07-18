const express = require('express');
const morgan = require('morgan');
const hbs  = require('express-handlebars');
const app = express();
const port = 3000;

//HTTP logger
app.use(morgan('combined'))

//Templete engine
app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.send('Hello Word!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})