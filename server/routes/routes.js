const express=require('express');
const router=express.Router();
const controllerUser=require('../controller/User');
const controllerMovie=require('../controller/Movie');
const controllerTheater=require('../controller/Theater');

router.post('/login',controllerUser.logIn);
router.get('/movies',controllerMovie.movie);
router.get('/theater',controllerTheater.theater);

module.exports=router;
