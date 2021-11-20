require('dotenv').config();
const path = require('path');
const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const directoryToUpload = 'dist';
const bucketName = 'fan-nft';

const filePaths = [];
const getFilePaths = (dir) => {
  fs.readdirSync(dir).forEach(function (name) {
    const filePath = path.join(dir, name);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      filePaths.push(filePath);
    } else if (stat.isDirectory()) {
      getFilePaths(filePath);
    }
  });
};

getFilePaths(directoryToUpload);

const uploadToS3 = (dir, path) => {
  return new Promise((resolve, reject) => {
    const key = path.split(`${dir}/`)[1];
    const params = {
      Bucket: bucketName,
      Key: key,
      Body: fs.readFileSync(path),
    };
    s3.putObject(params, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log(`uploaded ${params.Key} to ${params.Bucket}`);
        resolve(path);
      }
    });
  });
};

const uploadPromises = filePaths.map((path) =>
  uploadToS3(directoryToUpload, path)
);

Promise.all(uploadPromises)
  .then((result) => {
    console.log('uploads complete');
    console.log(result);
  })
  .catch((err) => console.error(err));