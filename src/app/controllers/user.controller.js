export class UserController{
    constructor(appService, stateParams,state, authService){

        this.appService = appService;
        this.app = "user works!";
    this.selected = [];

    authService.isAuthenticated();
    console.log(stateParams.id);

    this.users = this.getUsers();
    this.getUsers();

    this.query = {
        order: 'name',
        limit: 5,
        page: 1
      };
    }

    getUsers(){
        //Go to route
        // this.stateService.go("login");
        this.appService.getUsers((result)=>{
            this.users = result;
        })
    }
    
    success(desserts) {
      this.users = desserts;
    }


}

UserController.$inject = ["appService", "$stateParams","$state", "authService"];