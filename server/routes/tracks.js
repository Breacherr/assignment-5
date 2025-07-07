const express = require('express');
const router = express.Router();
const Track = require('../models/Track');
router.get('/', async (req, res) => {
  try {
    const tracks = await Track.find();
    res.json(tracks); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;