export class UserController{
    constructor(appService, stateParams, timeout){
        this.appService = appService;
        this.app = "user works!";
        this.selected = [];
        this.name="user controller"

        this.timeout = timeout;
        this.allContacts = this.loadContacts();
        this.asyncContacts = [];
        this.asyncContacts =  [this.allContacts[0]];
        this.filterSelected = true;



    }


      delayedQuerySearch(criteria) {
        return new Promise((resolve, reject)=>{      
            this.timeout(() => {
                var lowercaseQuery = criteria.toLowerCase();
                    let filteredData = criteria ? this.allContacts.filter(
                        function filterFn(contact) {
                            return (contact.name.toLowerCase().indexOf(lowercaseQuery) !== -1);
                          }
                          
        ) : [];
                  resolve(filteredData);
            },300, true);
           })
      }

    loadContacts() {
        var contacts = [
            {
                userId:1,
                name:`Renu Sharma <renu.shrama@epsilon.com>`,
                email:"renu.shrama@epsilon.com"
            },
            {
                userId:2,
                name:`Ashish Sharma <ashish.shrama@epsilon.com>`,
                email:"ashish.shrama@epsilon.com"
            },
            {
                userId:3,
                name:`Vipin Sharma <vipin.shrama@epsilon.com>`,
                email:"vipin.shrama@epsilon.com"
            }
        ];
  
        return contacts
      }
}

UserController.$inject = ["appService", "$stateParams","$timeout"];