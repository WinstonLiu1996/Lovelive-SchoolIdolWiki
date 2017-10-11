import { Component, Input } from '@angular/core';
import { Idol } from './idol';

//Create Model 三步曲：create, reg in module: declarations, html markup
@Component({
  selector: 'idol-detail',
  template:`
<div *ngIf="idol">
  <h2>Discover More About {{idol.name}}!</h2>
  <div><label>id: </label>{{idol.id}}</div>
  <div>
  <label>name: </label>
  <input [(ngModel)]="idol.name" placeholder="name"/>
  </div>
</div>`
})
export class IdolDetailComponent {
	@Input() idol: Idol;
	
}