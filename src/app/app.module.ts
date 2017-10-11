import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { IdolDetailComponent } from './idol-detail.component';

import { IdolService } from './idol.service';

//ngModel: FormsModule into imports
//idol-detail component: reg into declarations
//dependency injection for service: IdolService into providers
@NgModule({
  imports:      [ 
	  BrowserModule,
	  FormsModule
],
  declarations: [ 
	  AppComponent,
	  IdolDetailComponent
],
  bootstrap:    [ AppComponent ],
  providers: [
	  IdolService
  ]
})
export class AppModule { }
