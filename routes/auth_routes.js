const express = require('express');
const { register, login, home,contactUs } = require('../controller/authController');

const { protect } = require('../auth_middleware');
const router = express.Router();

router.post('/register', register); // protect,

router.post('/contactUs', contactUs); // protect,
router.post('/login', login);
router.get('/', home);




module.exports = router;
