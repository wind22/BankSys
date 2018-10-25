import express from 'express';
var router = express.Router();


router.use('/',require('../controller/index'));

module.exports = router;
