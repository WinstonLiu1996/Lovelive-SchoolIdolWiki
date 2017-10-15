import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { IdolDetailComponent } from './idol-detail.component';
import { IdolsComponent } from './idols.component';

import { IdolService } from './idol.service';


// Router
import { RouterModule }   from '@angular/router';
import { DashboardComponent } from './dashboard.component';

// ngModel: FormsModule into imports
// idol-detail component: reg into declarations
// dependency injection for service: IdolService into providers
@NgModule({
  imports:      [ 
	  BrowserModule,
	  FormsModule,
	  RouterModule.forRoot([
			  {
				  path: 'dashboard',
				  component: DashboardComponent
				},
		  {
		    path: 'idols',
		    component: IdolsComponent
		  }
		])
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
