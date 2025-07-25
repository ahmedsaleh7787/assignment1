import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})


export class Navbar {


// refrance:
// https://stackoverflow.com/questions/44764592/angular-4-hostlistener-window-scroll-event-strangely-does-not-work-in-firefox

initWidth:number=25;

@HostListener('window:scroll',[])
onWindowScroll(){
  if (window.scrollY>65) {
    this.initWidth=10;
  }else{
    this.initWidth=25;
  }
}




}
