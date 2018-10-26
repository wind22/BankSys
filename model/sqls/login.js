export class LoginSql {
    constructor(){

    }

    static isUserExist(username){
        return 'SELECT 1 FROM user WHERE name = '+'LIMIT 1';
    }
}
