//const { Router } = require('express')

const express = require('express');
const router = express.Router();
const session = require('express-session');
const logincontroller = require('./controller/logincontroller');
const homecontroller = require('./controller/homecontroller');
const registercontroller = require('./controller/registercontroller');

router.get("/", logincontroller.renderloginpage);
router.post("/", logincontroller.login);
router.get("/register", registercontroller.userRegister);
router.post("/register", registercontroller.registervalue);
router.get("/home", homecontroller.homerender);
router.post("/home", homecontroller.home);
module.exports = router