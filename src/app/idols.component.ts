import { Component } from '@angular/core';

import { Idol } from './idol';

import { IdolService } from './idol.service';

import { OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'my-idols',
  templateUrl: './idols.component.html',
  styleUrls: [ './idols.component.css' ]
})
export class IdolsComponent implements OnInit {

  title = 'Lovelive! School Idol Wiki';
  idols: Idol[];
  selectedIdol: Idol;
  
  constructor(
		  private router: Router,
		  private service: IdolService){
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
  
  gotoDetail(): void {
	  this.router.navigate(['/detail', this.selectedIdol.id]);
	}
}