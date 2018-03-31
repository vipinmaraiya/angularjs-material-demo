export class AuthService{
    constructor(){

    }
    isAuthenticated(){
        return new Promise((resolve, reject) =>{
            resolve("Access Denied from service");
        });
    }
}

