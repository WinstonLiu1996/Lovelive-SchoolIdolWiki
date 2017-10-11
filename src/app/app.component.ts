import { Component } from '@angular/core';
import { Idol } from './idol';

import { IdolService } from './idol.service';

//Notice: shift+cmd+s to save all
//Notice: _.component.ts Selector must have same name with html element name in index.html

//Notice: ngModel two-way binding must import FormsModule in app.module.ts
//Notice: ngFor -- directives; [class.selected] -- class binding
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>国立音ノ木坂学院 ウェブサイト</h2>
    <ul class="idols">
      <li *ngFor="let idol of idols"
        [class.selected]="idol === selectedIdol"
        (click)="onSelect(idol)">
        <span class="badge">{{idol.id}}</span> {{idol.name}}
      </li>
    </ul>
    
    <idol-detail [idol]="selectedIdol"></idol-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .idols {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .idols li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .idols li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .idols li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .idols .text {
      position: relative;
      top: -3px;
    }
    .idols .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Lovelive! School Idol Wiki';
  idols: Idol[];
  selectedIdol: Idol;
  
  constructor(private service: IdolService){
	  this.idols = this.service.getIdols();
  }

  onSelect(idol: Idol): void {
    this.selectedIdol = idol;
  }
}

//============= STOP/ARRET ABOVE:ViewModel BELOW:Model================






