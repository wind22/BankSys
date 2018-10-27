export class LoginSql {
    constructor(){

    }

    static isUserExist(username){
        return 'SELECT * FROM user WHERE name = '+username;
    }
	static isPwd
}
