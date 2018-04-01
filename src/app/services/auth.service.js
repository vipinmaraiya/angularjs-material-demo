export class AuthService{
    constructor(state){
        this.state = state;
    }
    isAuthenticated (){
        return new Promise(function(resolve, reject){
            resolve(true);
        });
    }
    isAdminAuthenticated(callback){
        return new Promise(function(resolve, reject){
            resolve(false);
        });
    }
}

AuthService.$inject = ["$state"];

