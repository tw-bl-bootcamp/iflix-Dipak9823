const express=require('express');
const router=express.Router();
const controller=require('../controller/UserController');

router.post('/login',controller.logIn);

module.exports=router;