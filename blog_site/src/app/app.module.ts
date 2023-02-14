import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ManageBlogComponent } from './manage-blog/manage-blog.component';
// import { HomeChildComponent } from './home-child/home-child.component';
import { HomeComponent } from './home/home.component';
import{ReactiveFormsModule}   from '@angular/forms';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateBlogComponent,
    ManageBlogComponent,
    // HomeChildComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
