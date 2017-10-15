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
var idol_1 = require("./idol");
//Create Component 三步曲：create, reg in module: declarations, html markup
var IdolDetailComponent = (function () {
    function IdolDetailComponent() {
    }
    return IdolDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", idol_1.Idol)
], IdolDetailComponent.prototype, "idol", void 0);
IdolDetailComponent = __decorate([
    core_1.Component({
        selector: 'idol-detail',
        template: "\n<div *ngIf=\"idol\">\n  <h2>Discover More About {{idol.name}}!</h2>\n  <div><label>id: </label>{{idol.id}}</div>\n  <div>\n  <label>description: </label>\n  <input [(ngModel)]=\"idol.description\" placeholder=\"description\" style=\"width: 800px\"/>\n  </div>\n</div>"
    })
], IdolDetailComponent);
exports.IdolDetailComponent = IdolDetailComponent;
//# sourceMappingURL=idol-detail.component.js.map