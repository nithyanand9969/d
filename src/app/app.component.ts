import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isMenuScrolled = false;
  isSidebarShowing = false;
  
  
  @HostListener('window:scroll', ['$event'])

  scrollCheck() {

    if (window.scrollY > 70)

      this.isMenuScrolled = true;
    else
      this.isMenuScrolled = false;

    console.log(this.isMenuScrolled);


  }
  
  openSideBar(){

    this.isSidebarShowing =true;
  }
  closeSideBar(){

      this.isSidebarShowing=false;
      
  }

  

}
