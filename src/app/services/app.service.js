export class AppService{
    constructor(http){
        this.http = http;
    }

    getUsers(callback){
        this.http.get("/api/users").then((result)=>{
            return result.data;
        });
    }
}

AppService.$inject = ["$http"];