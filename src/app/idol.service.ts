import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Idol} from './idol';

//SERVICES PART
@Injectable()
export class IdolService {
	
// method1 Get Constant from Mock-idols
// sub-method1 Instant Get --- only write this getIdols(). Do not need else inside this class;
//	getIdols(): Promise<Idol[]> {
//			return Promise.resolve(IDOLS);
//	};
	
	
// sub-method2: Latency 2seconds Get
//	getIdolsHelper(): Promise<Idol[]> {
//	return Promise.resolve(IDOLS);
//};
//	
//	getIdols(): Promise<Idol[]> {
//		  return new Promise(resolve => {
//		    // Simulate server latency with 2 second delay
//		    setTimeout(() => resolve(this.getIdolsHelper()), 2000);
//		  });
//		}
//	
//	getIdol(id: number): Promise<Idol> {
//	    return this.getIdols()
//        .then(idols => idols.find(
//                function(idol) {
//           return idol.id === id
//           }
//                ));
//	}

// method2 Fetch using HTTP
    private idolsUrl = 'api/loveliveIdols';  // URL to web api
    
    constructor(private http: Http) { }
    
    getIdols(): Promise<Idol[]> {
        return this.http.get(this.idolsUrl)
                   .toPromise()
                   .then(response => response.json().data as Idol[])
                   .catch(this.handleError);
      }
    
    getIdol(id: number): Promise<Idol> {
        const url = `${this.idolsUrl}/${id}`;
        return this.http.get(url)
          .toPromise()
          .then(response => response.json().data as Idol)
          .catch(this.handleError);
      }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }


}


