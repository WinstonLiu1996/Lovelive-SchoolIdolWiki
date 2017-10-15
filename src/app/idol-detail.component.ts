import { Component, Input } from '@angular/core';
import { Idol } from './idol';

//Create Component 三步曲：create, reg in module: declarations, html markup
@Component({
  selector: 'idol-detail',
  template:`
<div *ngIf="idol">
  <h2>Discover More About {{idol.name}}!</h2>
  <div><label>id: </label>{{idol.id}}</div>
  <div>
  <label>description: </label>
  <input [(ngModel)]="idol.description" placeholder="description" style="width: 800px"/>
  </div>
</div>`
})
export class IdolDetailComponent {
	@Input() idol: Idol;
	
}