const express = require("express");
const morgan =  require("morgan");
// const { db } = require('./models');
// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })
const models = require('./models');
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static(__dirname + "/views"));


app.get('/', (req, res) => {
  res.send('hello world');
})

// app.get('/addPage', (req, res) => {
//   res.send('test page')
// })

const init = async () => {
  await models.User.sync()
  await models.Page.sync()

const PORT = 1337;

app.listen(PORT, () => {
console.log(`App listening in port ${PORT}`);
});
}

init();
