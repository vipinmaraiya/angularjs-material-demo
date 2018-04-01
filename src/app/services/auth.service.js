export class AuthService{
    constructor(state){
        this.state = state;
    }
    isAuthenticated(){
        if(false)
        this.state.go("accessdenied")
    }
}

AuthService.$inject = ["$state"];

