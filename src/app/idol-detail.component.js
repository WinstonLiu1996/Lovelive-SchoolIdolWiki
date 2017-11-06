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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var idol_service_1 = require("./idol.service");
require("rxjs/add/operator/switchMap");
var idol_1 = require("./idol");
//Create Component 三步曲：create, reg in module: declarations, html markup
var IdolDetailComponent = (function () {
    function IdolDetailComponent(idolService, route, location) {
        this.idolService = idolService;
        this.route = route;
        this.location = location;
    }
    IdolDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.idolService.getIdol(+params.get('id')); })
            .subscribe(function (idol) { return _this.idol = idol; });
    };
    IdolDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return IdolDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", idol_1.Idol)
], IdolDetailComponent.prototype, "idol", void 0);
IdolDetailComponent = __decorate([
    core_1.Component({
        selector: 'idol-detail',
        templateUrl: './idol-detail.component.html',
        styleUrls: ['./idol-detail.component.css']
    }),
    __metadata("design:paramtypes", [idol_service_1.IdolService,
        router_1.ActivatedRoute,
        common_1.Location])
], IdolDetailComponent);
exports.IdolDetailComponent = IdolDetailComponent;
//# sourceMappingURL=idol-detail.component.js.map