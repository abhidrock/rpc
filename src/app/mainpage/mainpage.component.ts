import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  default_headers:any[];

  constructor() {
    this.default_headers = [
        {
          "fieldname": "versiosn",
          "placeholder": "xx",
          "description": "version"
        },
        {
          "fieldname": "CUST_TEL_NO",
          "placeholder": "Range: 1 - 28 digits",
          "description": "Subscriber number as represented in the SDP database for subscriber, master subscriber or sub subscriber."
        },
        { 
          "fieldname": "origin_node_type",
          "placeholder": "Range: 1 - 8 characters",
          "description": "Values reserved for Charging System nodes: ADM, IVR, SDP, AIR, UGW, OGW and EXT. This parameter contains the type of the node where the request originated."
        },
        {
          "fieldname": "origin_node_id",
          "placeholder": "Range: 1 - 255 characters",
          "description": "This parameter contains the host-name of the node where the request originated."

        },
        {
          "fieldname": "transaction_id",
          "placeholder": "Range: 1 - 20 characters",
          "description": "This parameter contains the ID of the transaction performed."
        },
        {
          "fieldname": "transaction_date_time",
          "placeholder": "Range: YYYY-MM-DDThh:mm:ss[+|-]hh:mm",
          "description": "The date and time is followed by time zone information consisting of “+” or “-” and the deviation from UTC in hours and minutes. The time difference is set by the service handling the refill barring and is not necessary the same as the SDP time difference. Example 2009-03-03T13:48:55+01:00"
        }
      ];

    console.log(this.default_headers);
   }

  ngOnInit() {
  }

}
