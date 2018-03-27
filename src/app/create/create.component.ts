import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  blocks: any;

  constructor() {
    this.blocks = [
      {
        "blockName" : "Subscriber"
      },
      {
        "blockName" : "Charging"
      },
      {
        "blockName" : "Promotion"
      },
      {
        "blockName" : "Subordinate"
      },
      {
        "blockName" : "SubscriberFaF"
      },
      {
        "blockName" : "AccountFaF"
      },
      {
        "blockName" : "PeriodicAccountManagement"
      }
    ];
  }

  ngOnInit() {
  }

}
