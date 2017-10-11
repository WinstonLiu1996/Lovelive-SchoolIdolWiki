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
//Notice: shift+cmd+s to save all
//Notice: _.component.ts Selector must have same name with html element name in index.html
//Notice: ngModel two-way binding must import FormsModule in app.module.ts
//Notice: ngFor -- directives; [class.selected] -- class binding
var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
        this.title = 'Lovelive! School Idol Wiki';
        this.idols = this.service.getIdols();
    }
    AppComponent.prototype.onSelect = function (idol) {
        this.selectedIdol = idol;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>\u56FD\u7ACB\u97F3\u30CE\u6728\u5742\u5B66\u9662 \u30A6\u30A7\u30D6\u30B5\u30A4\u30C8</h2>\n    <ul class=\"idols\">\n      <li *ngFor=\"let idol of idols\"\n        [class.selected]=\"idol === selectedIdol\"\n        (click)=\"onSelect(idol)\">\n        <span class=\"badge\">{{idol.id}}</span> {{idol.name}}\n      </li>\n    </ul>\n    \n    <idol-detail [idol]=\"selectedIdol\"></idol-detail>\n  ",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .idols {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .idols li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .idols li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .idols li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .idols .text {\n      position: relative;\n      top: -3px;\n    }\n    .idols .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [idol_service_1.IdolService])
], AppComponent);
exports.AppComponent = AppComponent;
//============= STOP/ARRET ABOVE:ViewModel BELOW:Model================
//# sourceMappingURL=app.component.js.map