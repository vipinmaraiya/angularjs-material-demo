export class AuthService{
    constructor(state){
        this.state = state;
    }
    isAuthenticated(callback){
        callback(true);
    }
    isAdminAuthenticated(callback){
        callback(false);
    }
}

AuthService.$inject = ["$state"];

