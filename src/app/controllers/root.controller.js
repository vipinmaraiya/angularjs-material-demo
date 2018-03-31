
export class RootController{
    constructor(appService,mdDialog){
        this.mdDialog = mdDialog;
        this.appService = appService;
        this.app = "app works!";
        this.availableColors = ["Red", "Green", "Blue"]
    }

    showTabDialog(ev) {
        this.method="addUser";
        this.param = 2;
        this.mdDialog.show({
           controller: () => this,
           controllerAs: 'root',
          templateUrl: 'dialog/tabDialog.tmpl.html',
           parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true
        })
            .then(function(answer) {
                console.log(answer)
              //this.status = 'You said the information was "' + answer + '".';
            }, function() {
                //this.status = 'You cancelled the dialog.';
            });
      };

      addUser(id){
          console.log(id);
      }
      cancel(){
          this.mdDialog.hide();
      }
}

RootController.$inject = ["appService", "$mdDialog"];