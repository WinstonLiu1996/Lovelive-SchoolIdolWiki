"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_idols_1 = require("./mock-idols");
//SERVICES PART
var IdolService = (function () {
    function IdolService() {
    }
    // method1: Instant Get --- only write this getIdols(). Do not need else inside this class;
    //	getIdols(): Promise<Idol[]> {
    //			return Promise.resolve(IDOLS);
    //	};
    // method2: Latency 2seconds Get
    IdolService.prototype.getIdolsHelper = function () {
        return Promise.resolve(mock_idols_1.IDOLS);
    };
    ;
    IdolService.prototype.getIdols = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getIdolsHelper()); }, 2000);
        });
    };
    return IdolService;
}());
IdolService = __decorate([
    core_1.Injectable()
], IdolService);
exports.IdolService = IdolService;
//Promise.resolve: Promise.resolve(value); Promise.resolve(promise); Promise.resolve(thenable); 
//# sourceMappingURL=idol.service.js.map