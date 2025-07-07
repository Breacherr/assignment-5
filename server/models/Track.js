const mongoose = require('mongoose');
const TrackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'provide a title'],
  },
  artist: {
    type: String,
    required: [true, 'provide an artist'],
  },
  album: {
    type: String,
  },
  genre: {
    type: String,
  },
  duration: {
    type: Number,
    required: true,
  },
  filePath: {
    type: String,
    required: true,
    unique: true, 
  },
});
module.exports = mongoose.model('Track', TrackSchema);