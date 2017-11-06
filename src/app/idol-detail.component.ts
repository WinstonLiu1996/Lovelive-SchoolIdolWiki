import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { IdolService } from './idol.service';

import 'rxjs/add/operator/switchMap';

import { Idol } from './idol';

//Create Component 三步曲：create, reg in module: declarations, html markup
@Component({
  selector: 'idol-detail',
  templateUrl: './idol-detail.component.html',
  styleUrls: [ './idol-detail.component.css' ]
})
export class IdolDetailComponent implements OnInit{
	@Input() idol: Idol;
	
	constructor(private idolService: IdolService,
				private route: ActivatedRoute,
				private location: Location) {
		
	}
	
	ngOnInit(): void {
		this.route.paramMap
	    .switchMap((params: ParamMap) => this.idolService.getIdol(+params.get('id')))
	    .subscribe(idol => this.idol = idol);
    }
	
	goBack(): void {
		  this.location.back();
		}

}