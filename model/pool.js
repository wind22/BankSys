import mysql from 'mysql';

//mysql settings
var env = {
    host:'localhost',
    user:'root',
    password:'qaz123',
    database:'test'
};

module.exports = mysql.createPool(env);
