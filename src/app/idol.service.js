"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
//SERVICES PART
var IdolService = (function () {
    function IdolService(http) {
        this.http = http;
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
        this.idolsUrl = 'api/loveliveIdols'; // URL to web api
    }
    IdolService.prototype.getIdols = function () {
        return this.http.get(this.idolsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    IdolService.prototype.getIdol = function (id) {
        var url = this.idolsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    IdolService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return IdolService;
}());
IdolService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], IdolService);
exports.IdolService = IdolService;
//# sourceMappingURL=idol.service.js.map