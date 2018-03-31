export class AppService{
    constructor(http){
        this.http = http;
    }
}

AppService.$inject = ["$http"];