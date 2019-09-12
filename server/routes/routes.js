const express=require('express');
const router=express.Router();
const controllerUser=require('../controller/User');
const controllerMovie=require('../controller/Movie');

router.post('/login',controllerUser.logIn);
router.get('/movies',controllerMovie.movie);

module.exports=router;
