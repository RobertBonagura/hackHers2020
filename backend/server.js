const express = require("express");
const { spawn } = require("child_process");
var cors = require('cors');
const app = express();
app.use(cors());
const port = 5000;
const router = express.Router();
var array = [
  "limit",
  "sex",
  "education",
  "marriage",
  "age",
  "pay1",
  "pay2",
  "pay3",
  "pay4",
  "pay5",
  "pay6",
  "billamount1",
  "billamount2",
  "billamount3",
  "billamount4",
  "billamount5",
  "billamount6",
  "payamount1",
  "payamount2",
  "payamount3",
  "payamount4",
  "payamount5",
  "payamount6"
];
router.post("/defaulted", (req, res) => {
  console.log(array.length);
  let vars = req.query;
  vars = JSON.stringify(vars);
  //console.log(vars);
  //res.send("Get info");
  var dataToSend;
  //spawn new child process to call the python script
  const python = spawn("python3", [
    "/Users/robert.bonagura/Desktop/hackHers2020/Load_Model.py",
    vars
  ]);
  // collect data from script
  //console.log("hey");
  python.stderr.on("data", function(data) {
    //console.log("Pipe data from python script ...");
    dataToSend = data.toString();
    console.log(dataToSend);
  });
  python.stdout.on("data", function(data) {
    //console.log("Pipe data from python script ...");
    dataToSend = data.toString();
    if (dataToSend.includes("DEFAULT")) {
      console.log(dataToSend)
      var resp = dataToSend.split("DEFAULT: [[");
      var res2 = resp[1].split("]]");
      console.log(res2[0]);
      if (res2[0] < 0.5){
        res.send("0");
      }
      else{
       res.send("1");
      }
    }
  });
  // in close event wrese are sure that stream from child process is closed
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
