const Movie = require('../model/Movie')

// -------------------------------------------------

exports.listMovies = async(req, res) => {
    res.send("Let's build a Movie CRUD ")
}

require('../model/db');
/*
exports.listMovies = async(req,res) => {     
    res.send("Let's build a Movie CRUD API") 
}
*/

/* exports.listMovies = async(req,res) => {     
    res.send("Let's build a Movie CRUD API") 
}*/

/*
Route: /api/movies
Method: POST
*/
exports.insertSingleMovie = async(req,res) => {

    const newMovie = new Movie({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      thumbnail: req.body.thumbnail
    })
  
    try{
      await newMovie.save();
      res.json(newMovie)
    } catch(error){
      res.status(400).json({message: error})
    }
  }

  