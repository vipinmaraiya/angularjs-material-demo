
export class UserController{
    constructor(appService){
        this.appService = appService;
        this.app = "app works!";
    }

}

UserController.$inject = ["appService"];