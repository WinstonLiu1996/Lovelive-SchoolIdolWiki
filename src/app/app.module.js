"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var idol_detail_component_1 = require("./idol-detail.component");
var idols_component_1 = require("./idols.component");
var idol_service_1 = require("./idol.service");
// Router
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
// ngModel: FormsModule into imports
// idol-detail component: reg into declarations
// dependency injection for service: IdolService into providers
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: 'idols',
                    component: idols_component_1.IdolsComponent
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            idol_detail_component_1.IdolDetailComponent,
            idols_component_1.IdolsComponent,
            dashboard_component_1.DashboardComponent
        ],
        providers: [idol_service_1.IdolService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map