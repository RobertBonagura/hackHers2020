const express = require("express");
const { spawn } = require("child_process");
const app = express();
const port = 3001;
const router = express.Router();
router.get("/defaulted", (req, res) => {
  res.send("Get info");
  var dataToSend;
  //spawn new child process to call the python script
  const python = spawn("python", ["../Load_Model.py"]);
  // collect data from script
  console.log("hey");
  python.stderr.on("data", function(data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
    console.log(dataToSend);
  });
  //   python.stdout.on("data", function(data) {
  //     console.log("Pipe data from python script ...");
  //     dataToSend = data.toString();
  //     console.log(dataToSend);
  //   });
  // in close event we are sure that stream from child process is closed
  //   python.on("close", code => {
  //     console.log(`child process close all stdio with code ${code}`);
  //     // send data to browser
  //     res.send(dataToSend);
  //   });
});
app.get("/", (req, res) => {
  res.send("Server running!");
});
app.use("/learn", router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
