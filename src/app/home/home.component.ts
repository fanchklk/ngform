import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goalsanim',[
      transition('* => *',[
        query(':enter', style({ opacity: 0 }), {optional:true}),
        query(':enter', stagger('300ms', [
            animate('.6s ease-in-out', keyframes([
              style({ opacity:0, transform:'translateY(-200px)', offset:0 }),
              style({ opacity:0.3, transform:'translateY(35px)', offset:.3 }),
              style({ opacity:1, transform:'translateY(0)', offset:1 }),
            ]))
          ]), {optional:true}),
          query(':leave', stagger('300ms', [
            animate('.6s ease-in-out', keyframes([
              style({ opacity:1, transform:'translateY(0)', offset:0 }),
              style({ opacity:0.3, transform:'translateY(35px)', offset:.3 }),
              style({ opacity:0, transform:'translateY(-200px)', offset:1 }),
            ]))
          ]), {optional:true})
        
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount:number;
  btnText: string = "ajouter à la liste";
  goalText:string = "First";
  goals = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }
  removeItem(i) {
    this.goals.splice(i, 1);    
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }


}
