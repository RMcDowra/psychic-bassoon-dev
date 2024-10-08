const express = require('express');
const router = express.Router();
//Imported controller to our routes file
const movieController = require('../controller/movieController');

/*Routes*/
router.get('/api/movies', movieController.listMovies);

module.exports = router;



