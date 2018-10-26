import express from 'express';
var router = express.Router();
import {LoginSql} from "../model/sqls/login";
import pool from '../model/pool';

router.get('/', function(req, res, next) {

    res.render('login');
});

router.post('/',function (req,res,next) {
    var data = req.body;


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
        });

        if(successLogin){
            //check password
            con.query();
        }
        pool.releaseConnection(con);
        var json = {
            user:{
                type:"客户"
            },
            status: successLogin,
            msj:'登陆失败，账号或密码有错误'
        };

        console.log(json);

        res.json(json).end();
    });
    //需要返回returnMsg（user：当前登陆用户 status：登陆状态 msj：登陆成功/账号或密码错误 menuJSON：对不同角色生成菜单 ）

});


module.exports = router;
