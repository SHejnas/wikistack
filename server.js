const http = require("http");
const models = require("./models");
const app = require("./app.js");
const server = http.createServer(app);


const PORT = 1337;

const init = async () => {
  await models.User.sync();
  await models.Page.sync();

  server.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
};

init();
