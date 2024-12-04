const express = require('express');
const { addForm,  } = require('../controller/job_apply_form');
const { contactUs,  } = require('../controller/contact_us');

const { protect } = require('../auth_middleware');
const router = express.Router();

router.post('/addForm', addForm); // protect,

router.post('/contactUs', contactUs); // protect,


module.exports = router;
