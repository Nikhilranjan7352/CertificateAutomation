


const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs-extra');
const { json } = require('body-parser');
const { spawn } = require('child_process');

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log("okay i am being called too")
    // console.log(req.body.uploadLocation)
    const array=JSON.parse(req.body.uploadLocation)
    const uploadLocation = `uploads/${array[0]}`;
    // const uploadLocation = `uploads/${"dhdh"}`;
    cb(null, uploadLocation);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

app.listen(9000, () => {
  console.log('Server is running on port 9000');
});

app.get('/', (req, res) => {
  const uniqueId = uuidv4();
  const folderName = `folder_${uniqueId}`;
  fs.mkdirSync(`uploads/${folderName}`);
  console.log(folderName)
  res.send(folderName);
});


app.post('/cleanup', (req, res) => {
  const uniqueId = req.body.pageid;
  const folderName = `folder_${uniqueId}`;
  const folderPath = `uploads/${folderName}`;
  console.log("uui",uniqueId)
  console.log("i am being calledhahahh ")

  fs.remove(folderPath)
    .then(() => {
      res.send('Directory deleted successfully!');
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Failed to delete the directory.');
    });
});


app.post('/oop', upload.single('file'), (req, res) => {
  const file = req.file;
  const dataArray=JSON.parse(req.body.uploadLocation);
  console.log(dataArray[1]);
  const pythonProcess = spawn('python', ['D:/react-projects/0.0.7_0/myapp/heyhey/pythonScripts/mainScript.py']);

  pythonProcess.stdin.write(JSON.stringify(dataArray));
  pythonProcess.stdin.end();

  pythonProcess.stdout.on('data', (data) => {
    // Handle stdout data from the Python script
    console.log(data.toString());
  });

  pythonProcess.stderr.on('data', (data) => {
    // Handle stderr data from the Python script
    console.error(data.toString());
  });

  pythonProcess.on('close', (code) => {
    // Handle process close event
    console.log(`Python script exited with code ${code}`);
    res.send(`Python script exited with code ${code}`);
  });
  // res.send('Received the file successfully!');
});

