import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-feed-container',
  templateUrl: './feed-container.component.html',
  styleUrls: ['./feed-container.component.css']
})
export class FeedContainerComponent implements OnInit {

  collapseSidebar: boolean;
  url: string;
  @ViewChild(MatSidenav) sidemenu : MatSidenav;
  compactSidebar: boolean;
  
  constructor() { 
    this.compactSidebar = true;
    this.collapseSidebar = false;
  }

  ngOnInit() {
    // this.url =this.router.url
  }

  isOver(): boolean {
    // console.log(this.url)
    if (this.url === '/home') {
      return true;
    } else {
      return window.matchMedia(`(max-width: 960px)`).matches;
    }
  }

}
