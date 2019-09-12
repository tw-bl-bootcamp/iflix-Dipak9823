const express=require('express');
const router=express.Router();
const controllerUser=require('../controller/User');
const controllerMovie=require('../controller/Movie');
const controllerTheater=require('../controller/Theater');
const controllerSeat=require('../controller/Seat');

router.post('/login',controllerUser.logIn);
router.get('/movies',controllerMovie.movie);
router.get('/theater',controllerTheater.theater);
router.post('/seats',controllerSeat.seat);

module.exports=router;
