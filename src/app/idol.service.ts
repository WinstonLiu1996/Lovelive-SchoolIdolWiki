import { Injectable } from '@angular/core';

import {Idol} from './idol';
import {IDOLS} from './mock-idols';

//SERVICES PART
@Injectable()
export class IdolService {
	
// method1: Instant Get --- only write this getIdols(). Do not need else inside this class;
//	getIdols(): Promise<Idol[]> {
//			return Promise.resolve(IDOLS);
//	};
	
	
// method2: Latency 2seconds Get
	getIdolsHelper(): Promise<Idol[]> {
	return Promise.resolve(IDOLS);
};
	
	getIdols(): Promise<Idol[]> {
		  return new Promise(resolve => {
		    // Simulate server latency with 2 second delay
		    setTimeout(() => resolve(this.getIdolsHelper()), 2000);
		  });
		}
}

//Promise.resolve: Promise.resolve(value); Promise.resolve(promise); Promise.resolve(thenable);