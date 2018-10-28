import express from 'express';
var router = express.Router();
import {LoginSql} from "../model/sqls/login";
import pool from '../model/pool';
import async from 'async';
router.get('/', function(req, res, next) {

    res.render('login');
});

router.post('/btn2',function (req,res,next) {
    var data = req.body;

    var json = {
        user:{
            type:"客户"
        },
        status: true,
        msj:'登陆失败，账号或密码有错误'
    };


    pool.getConnection(function (err,con) {
        var successLogin = true;
        con.query(LoginSql.isUserExist(data.account),function (err,result) {
            if(err){
                successLogin = false;
                console.error(err);
            }
            if(result.length == 0){
                //can not find match accout
                successLogin = false;
                console.log(successLogin);
            }
            json.status = successLogin;
            pool.releaseConnection(con);
            res.json(json).end();

        });
    });
});

router.post('/btn1',function (req,res,next) {
    var json = {

        attribute:"123"

    };
   res.json(json).end();
});


module.exports = router;
