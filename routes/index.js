import express from 'express';
var router = express.Router();


router.use('/',require('../controller/index'));
router.use('/login',require('../controller/login'));

router.use('/customer',require('../controller/customer'));

module.exports = router;
