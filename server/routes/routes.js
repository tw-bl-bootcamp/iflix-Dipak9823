const express=require('express');
const router=express.Router();
const controller=require('../controller/User');

router.post('/login',controller.logIn);
router.get('/movies',controller.movies);

module.exports=router;