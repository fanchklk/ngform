import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  constructor() { }
  varclass:string = "toto";
  stylefond:string = "color";

  ngOnInit() {
  }
  changeclasse(){
    if (this.varclass=="toto"){
      this.varclass="titi";
      console.log("toto");
    }
    else{
      this.varclass="toto";
    }
  }
}
