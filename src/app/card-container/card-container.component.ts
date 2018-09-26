import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  //fake app data
  apps = [
    {name:"My LTI Team", link:"", icon:"people"},
    {name:"Appreciation", link:"",icon:"card_giftcard"},
    {name:"Opportunities", link:"",icon:"assignment_turned_in"},
    {name:"Suggestions", link:"",icon:"markunread_mailbox"},
    {name:"Escalations", link:"",icon:"assignment_late"},
  ]


  constructor() { }

  ngOnInit() {
  }

}
