import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent  {
 frutas = [ 'manzana', 'pera','melon', 'frutilla', 'duranzo']
  constructor() { }
 numero = 300;
 persona= {name: 'gregor', apellido: 'lopez'};
  
  }


