import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.page.html',
  styleUrls: ['./order-form.page.scss'],
})


export class OrderFormPage implements OnInit {
  roomnumber: string = "";
  email: string = "";
  date: string = "";
  time: string = "";
  currentdorm: string = "";
  

  constructor(public storage: Storage) { 
  }


  ngOnInit() {
  }
  dorms = [{ "name" : "Northside", "src": "../../assets/photos/dorms/York-College-Northside.jpg", "doorsidedelivery":"true", "maketransparent": "null"},
  { "name" : "Country Club", "src": "../../assets/photos/dorms/York-College-CountryClub.jpg", "doorsidedelivery":"true", "maketransparent": "null"},
  { "name" : "Spring Garden", "src": "../../assets/photos/dorms/York-College-SpringGarden.jpg", "doorsidedelivery":"true", "maketransparent": "null"}, 
  { "name" : "Susquehanna", "src": "../../assets/photos/dorms/York-College-Susquehanna.jpg", "doorsidedelivery":"true", "maketransparent": "null"},
  { "name" : "Tyler Run", "src": "../../assets/photos/dorms/York-College-TylerRun.jpg", "doorsidedelivery":"true", "maketransparent": "null"},

];
  public getColor(doorsidedelivery: string): string{
    return doorsidedelivery == "true" ? "green" : "red";
  }
  styleObject(transparent): Object {
    if (transparent == "null") {
      return {}
    }
    if (transparent != "false"){
        return {opacity: 0.3,filter: 'alpha(opacity=50)'};
    }
    return {}
}


  public goToDetails(dorm) {
      for(let key in this.dorms){
        if (dorm.name === this.dorms[key].name) {
          console.log('this one matches ' + dorm.name)
          this.dorms[key].maketransparent = "false";
          console.log(this.dorms[key]);
        }
        else 
          this.dorms[key].maketransparent = "true";
      }
    }
  public currentSelectedDorm(): string {
    for(let key in this.dorms) {
      if(this.dorms[key].maketransparent === "false") {
        this.currentdorm = this.dorms[key].name;
        return this.currentdorm;
      }
    }
  }

    public onSubmit() {
      console.log(this.date);
      console.log(this.time);
      console.log(this.email);
      console.log(this.roomnumber);
      console.log("Thanks for submitting your info!");
      console.log(this.currentSelectedDorm());
      //now I need to move this all into an "order" object and from there send it thru an api to AWS!
      // this function should also navigate to a confirmation page displaying details and also providing them with a venmo transaction ID 
    }
  }


