import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.page.html',
  styleUrls: ['./order-form.page.scss'],
})


export class OrderFormPage implements OnInit {

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
  }