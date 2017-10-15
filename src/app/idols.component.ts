import { Component } from '@angular/core';
import { Idol } from './idol';

import { IdolService } from './idol.service';

import { OnInit } from '@angular/core';

@Component({
  selector: 'my-idols',
  template: `
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
export class IdolsComponent implements OnInit {
  title = 'Lovelive! School Idol Wiki';
  idols: Idol[];
  selectedIdol: Idol;
  
  constructor(private service: IdolService){
  }
  
  getIdols(): void {
      //notice: return promise here. Promise.then()
      let promise = this.service.getIdols();
      promise.then(_ => this.idols = _);
  }
  
  ngOnInit(): void {
      this.getIdols();
  }

  onSelect(idol: Idol): void {
    this.selectedIdol = idol;
  }
}