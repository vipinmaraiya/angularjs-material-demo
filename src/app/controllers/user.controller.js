
export class UserController{
    constructor(appService){
        this.appService = appService;
        this.app = "user works!";
    this.selected = [];
    this.users = this.getUsers();
    this.getUsers();

      
    this.query = {
        order: 'name',
        limit: 5,
        page: 1
      };
    }

    getUsers(){
        this.appService.getUsers((result)=>{
            this.users = result;
        })
    }
    
    success(desserts) {
      this.users = desserts;
    }


}

UserController.$inject = ["appService"];