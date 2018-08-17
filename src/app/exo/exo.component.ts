import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo',
  templateUrl: './exo.component.html',
  styleUrls: ['./exo.component.scss']
})
export class ExoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  f() {
    var x = 1;
    let y = 2;
    const z = 3;
      {
        var x = 100;
        let y = 200;
        const z = 300;
        console.log('x in block scope is', x);
        console.log('y in block scope is', y);
        console.log('z in block scope is', z);
      }
    console.log('x outside of block scope is', x);
    console.log('y outside of block scope is', y);
    console.log('z outside of block scope is', z);
  }
  
  var colors = ['red', 'green', 'blue'];
  var values = [1, 60, 34, 30, 20, 5];
  var capitalizedColors = colors.map(capitalize);
  var valuesLessThan20 = values.filter(lessThan20)
  var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9},
    {name: 'Jason', age: 15},
    {name: 'John', age: 40},
    {name: 'Kevin', age: 12}
  ];
  function teenager(person) {
    return person.age > 10 && person.age < 20;
  }
  var lesAdos = people.filter(teenager);
  var firstTeenager = people.find(teenager);
  function print(val) {
    console.log(val);
  }
  function capitalize(val) {
    return val.toUpperCase();
  }
   function lessThan20(val) {
    return val < 35;
  } 
  
  colors.forEach(print);
  console.log(capitalizedColors);
  console.log(valuesLessThan20);
  console.log(lesAdos);
  console.log('First found teenager:', firstTeenager)



  function hello(firstName, lastName) {
  return `Good morning ${firstName} ${lastName}!
  How are you?`
  }
  console.log(hello('Jan', 'Kowalski'))
}
