var express = require('express');
const controller = require('../controllers/auth')
let router = express.Router();

router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/logout', controller.logout)

module.exports = router;



