import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {


  @Input() appName;
  @Input() icon;

  constructor() { }

  ngOnInit() {
  }

}
