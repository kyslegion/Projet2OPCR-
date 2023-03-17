const express = require('express');
const multer = require('multer');
const MIME_TYPE = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
};

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './images');
  },
  filename: (req, file, callback) => {
    const filename = file.originalname.split(' ').join('_');
    const filenameArray = filename.split('.');
    filenameArray.pop();
    const filenameWithoutExtention = filenameArray.join('.');
    const extension = MIME_TYPE[file.mimetype];
    callback(null, filenameWithoutExtention + Date.now() + '.' + extension);
  },
});

const upload = multer({ storage }).single('image');

module.exports = (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log('A Multer error occurred when uploading: ', err);
      return res.status(400).json({ message: 'Bad Request' });
    } else if (err) {
      console.log('An error occurred when uploading: ', err);
      return res.status(500).json({ message: 'Internal Server Error in multer-config' });
    }
    // add req.file to the request object
    req.file = req.file;
    next();
  });
 
};