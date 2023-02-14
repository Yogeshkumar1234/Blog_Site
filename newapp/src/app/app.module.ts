import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { IncdecComponent } from './incdec/incdec.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InterpolationComponent,
    IncdecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
