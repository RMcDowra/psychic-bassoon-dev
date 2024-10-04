const express = require('express');
const router = express.Router();
//Imported controller to our routes file
const movieController = require('../controller/movieController');

/*Routes*/
router.get('/api/movies', movieController.listMovies);

module.exports = router;



/**/
/*router.get('/api/movies', movieController.listMovies);*/
router.post('/api/movies', movieController.insertSingleMovie);
router.put('/api/movies/:id', movieController.updateSingleMovie);
router.delete('/api/movies/:id', movieController.deleteSingleMovie);
