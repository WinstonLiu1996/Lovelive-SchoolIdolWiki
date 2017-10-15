"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//Notice: shift+cmd+s to save all
//Notice: _.component.ts Selector must have same name with html element name in index.html
//Notice: ngModel two-way binding must import FormsModule in app.module.ts
//Notice: ngFor -- directives; [class.selected] -- class binding
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Lovelive! School Idol Wiki';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>\u56FD\u7ACB\u97F3\u30CE\u6728\u5742\u5B66\u9662 Otonokizaka Academy</h2>\n    <nav>\n    <a routerLink=\"/dashboard\">Dashboard</a>\n    <a routerLink=\"/idols\">Idols</a>\n    </nav>\n    <router-outlet></router-outlet>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map