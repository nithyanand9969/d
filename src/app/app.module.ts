import { HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AllCourcesComponent } from './all-cources/all-cources.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthlinksComponent } from './shared/authlinks/authlinks.component';
import { SociallinksComponent } from './shared/sociallinks/sociallinks.component';
import { PhoneComponent } from './shared/phone/phone.component';
import { EmailComponent } from './shared/email/email.component';
import { ButtonComponent } from './shared/button/button.component';
import { TestComponent } from './shared/test/test.component';
import { RatingComponent } from './shared/rating/rating.component';
import { TextnewComponent } from './textnew/textnew.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AllCourcesComponent,
    BlogComponent,
    PagesComponent,
    MenuComponent,
    AuthlinksComponent,
    SociallinksComponent,
    PhoneComponent,
    EmailComponent,
    ButtonComponent,
    TestComponent,
    RatingComponent,
    TextnewComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
  isMenuScrolled = false;

  @HostListener('window:scroll',['$event'])
  scrollCheck(){

    if(window.pageYOffset > 100)
    this.isMenuScrolled = true;
  else
  this.isMenuScrolled=false;

  console.log(this.isMenuScrolled);
  

  }

 }
