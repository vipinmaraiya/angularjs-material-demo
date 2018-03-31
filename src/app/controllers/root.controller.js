
export class RootController{
    constructor(appService,q, timeout){
        this.appService = appService;
        this.app = "app works!";
        this.availableColors = ["Red", "Green", "Blue"]
    }
}

RootController.$inject = ["appService","$q", "$timeout"];