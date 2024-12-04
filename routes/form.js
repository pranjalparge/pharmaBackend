const express = require('express');
const { addForm,  } = require('../controller/job_apply_form');

const { protect } = require('../auth_middleware');
const router = express.Router();

router.post('/addForm', addForm); // protect,




module.exports = router;
