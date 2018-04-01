export class AppService{
    constructor(http){
        this.http = http;
    }

    getUsers(){
       return this.http.get("/api/users");
    }
}

AppService.$inject = ["$http"];