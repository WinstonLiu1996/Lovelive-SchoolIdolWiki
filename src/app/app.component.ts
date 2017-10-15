import { Component } from '@angular/core';
import { Idol } from './idol';

import { IdolService } from './idol.service';

import { OnInit } from '@angular/core';


//Notice: shift+cmd+s to save all
//Notice: _.component.ts Selector must have same name with html element name in index.html

//Notice: ngModel two-way binding must import FormsModule in app.module.ts
//Notice: ngFor -- directives; [class.selected] -- class binding
@Component( {
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>国立音ノ木坂学院 Otonokizaka Academy</h2>
    <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/idols">Idols</a>
    </nav>
    <router-outlet></router-outlet>
  `
} )
export class AppComponent {
    title = 'Lovelive! School Idol Wiki';

}






