const express = require('express');
const { addForm, login, home,contactUs } = require('../controller/authController');

const { protect } = require('../auth_middleware');
const router = express.Router();

router.post('/addForm', addForm); // protect,

router.post('/contactUs', contactUs); // protect,
router.post('/login', login);
router.get('/', home);




module.exports = router;
