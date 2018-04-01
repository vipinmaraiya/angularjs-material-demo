export class UserController{
    constructor(appService, stateParams){
        this.appService = appService;
        this.app = "user works!";
        this.selected = [];
        this.name="user controller"

        this.getUsers();
        this.query = {
            order: 'name',
            limit: 5,
            page: 1
        };
    }

 async getUsers(){
        //Go to route
        // this.stateService.go("login");
        let data = await this.appService.getUsers();
        this.userdata = data.data;
        console.log(this)
    }
}

UserController.$inject = ["appService", "$stateParams"];