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
var idol_service_1 = require("./idol.service");
var router_1 = require("@angular/router");
var IdolsComponent = (function () {
    function IdolsComponent(router, service) {
        this.router = router;
        this.service = service;
        this.title = 'Lovelive! School Idol Wiki';
    }
    IdolsComponent.prototype.getIdols = function () {
        var _this = this;
        //notice: return promise here. Promise.then()
        var promise = this.service.getIdols();
        promise.then(function (_) { return _this.idols = _; });
    };
    IdolsComponent.prototype.ngOnInit = function () {
        this.getIdols();
    };
    IdolsComponent.prototype.onSelect = function (idol) {
        this.selectedIdol = idol;
    };
    IdolsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedIdol.id]);
    };
    return IdolsComponent;
}());
IdolsComponent = __decorate([
    core_1.Component({
        selector: 'my-idols',
        templateUrl: './idols.component.html',
        styleUrls: ['./idols.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        idol_service_1.IdolService])
], IdolsComponent);
exports.IdolsComponent = IdolsComponent;
//# sourceMappingURL=idols.component.js.map