const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Track = require('./models/Track'); 
dotenv.config();
mongoose.connect(process.env.MONGO_URI);
const tracks = [
  {
    title: '295',
    artist: 'Sidhu Moose Wala',
    album: 'Moosetape',
    genre: 'Punjabi Hip Hop',
    duration: 270,
    filePath: '/music/295.mp3',
  },
  {
    title: 'So High',
    artist: 'Sidhu Moose Wala',
    album: 'So High',
    genre: 'Punjabi Hip Hop',
    duration: 220, 
    filePath: '/music/so-high.mp3',
  },
  {
    title: 'Same Beef',
    artist: 'Sidhu Moose Wala, Bohemia',
    album: 'Same Beef',
    genre: 'Punjabi Hip Hop',
    duration: 295, 
    filePath: '/music/same-beef.mp3',
  },
   {
    title: 'The Last Ride',
    artist: 'Sidhu Moose Wala',
    album: 'The Last Ride',
    genre: 'Punjabi Hip Hop',
    duration: 262,
    filePath: '/music/the-last-ride.mp3',
  }
];
const importData = async () => {
  try {
    await Track.deleteMany();
    await Track.insertMany(tracks);
    console.log('data imported successfully');
    process.exit();
  } catch (error) {
    console.error(`error: ${error}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Track.deleteMany();
    console.log('data destroyed successfully!');
    process.exit();
  } catch (error) {
    console.error(`error: ${error}`);
    process.exit(1);
  }
};
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}