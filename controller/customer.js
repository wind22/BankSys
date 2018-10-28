import express from 'express';
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('customer');
});

router.get('/test',function (req,res,next) {
    res.sendFile(appRoot+'/views/testejs.html');
});



module.exports = router;
