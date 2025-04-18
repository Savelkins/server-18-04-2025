const http = require("http");
const connectDB = require("./config/db");
const app = require("./app");

connectDB();

const server = http.createServer(app);

const port = 3000;

server.listen(3000, () => {
  console.log(`Server started on port ${port}, http://localhost:${port}`);
});
