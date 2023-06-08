const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const currentTime = new Date();
const options = { timeZone: 'Asia/Kolkata', /* Other options */ };
const formattedTime = currentTime.toLocaleString('en-US', options);


const blogSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tags: { type: String, required: true },
  date: {type: Date, required: true, default: formattedTime}, // Set the default value to the current date and time
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
});

module.exports = mongoose.model('Blog', blogSchema);
