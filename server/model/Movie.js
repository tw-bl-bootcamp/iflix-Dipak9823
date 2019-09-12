var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({

    title: {
            type: String,
            required: true
    },

    language: {
        type: String,
        required: true
    },

    director: {
        type:String,
        required:true
    },

    actors: {
        type:String,
        required:true
    },

    poster: {
        type:String,
    },

    like: {
        type:Number,
        required:true
    },

    dislike: {
        type: Number,
        required:true
    },

    rate: {
        type:String,
        required:true
    }
});

var movie = mongoose.model('movies', movieSchema);

class MovieModel {
    async getAllMovies(req, callback) {
        try{
            var result=await movie.find({});
            return callback(null,result);
        } catch {
            return callback(err);
        }
    }
}
module.exports=new MovieModel();
