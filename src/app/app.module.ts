import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { IdolDetailComponent } from './idol-detail.component';
import { IdolsComponent } from './idols.component';

import { IdolService } from './idol.service';

// Router
import { AppRoutingModule } from './app-routing.module';

// Http Service
import { HttpModule } from '@angular/http';

//Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

// ngModel: FormsModule into imports
// idol-detail component: reg into declarations
// dependency injection for service: IdolService into providers
@NgModule({
  imports:      [ 
	  BrowserModule,
	  FormsModule,
	  AppRoutingModule,
	  HttpModule,
	  InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 })
],
  declarations: [ 
	  AppComponent,
	  IdolDetailComponent,
	  IdolsComponent,
	  DashboardComponent
],
  providers:    [ IdolService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
