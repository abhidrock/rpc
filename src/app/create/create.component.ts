import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

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
        "blockName": "Subscriber",
        "fields": [
          {
            "fieldName": "service_class",
            "placeholder": "Range: 0 – 9999",
            "description": "The service_class element is the subscribers current service class which may be either the permanent service class, or a temporary service class if that is set on the account The service class is also used in requests to validate some updates."
          },
          {
            "fieldName": "temp_blocked",
            "placeholder": "SET || CLEAR",
            "description": "This parameter contains the temporary blocking status of a subscriber, that shall be updated."
          },
          {
            "fieldName": "ussd_eocn_selection_id",
            "placeholder": "Range: 0 - 199, 255",
            "description": "Value 255 means no notification, meaning that no USSD End-of-Call Notification selection structure is set. This parameter identifies which decision tree to use, when selecting the appropriate USSD text string for the End of Call Notification message to the subscriber"
          },
          {
            "fieldName" : "account_home_region",
            "placeholder" : "Range: 0 – 999",
            "description" : "0 (zero): No account home region is set. This parameter contains the home region for the account."
          },
          {
            "fieldName" : "account_group_id",
            "placeholder" : "Range: 0 – 2147483647",
            "description" : "0 (zero): Reserved for reset of account_group_id. 1 – 2147483647: account_group_id. This parameter contains the account group identity for the account."
          },
          {
            "fieldName" : "service_offerings",
            "placeholder" : "Range: 0 - 2147483647",
            "description" : "This parameter contains the service offering parameter for the subscriber"
          },
          {
            "fieldName" : "account_time_zone",
            "placeholder" : "Range: 1-256 characters",
            "description" : "time zone is based on the Olson TZ Database (part of the JavaTM framework), which contains close to 600 different time zone text strings, e.g. Etc/GMT+5, EST, EST5EDT and America/Whitehorse. It is important that these time zones are specified exactly as the Olson TZ Database, as they will be used directly by the JavaTM framework (see the JavaDoc or <a target=\"_blank\" href='https://en.wikipedia.org/wiki/Tz_database'>tz database WIKI</a> for more information)"
          },
          {
            "fieldName" : "currency",
            "placeholder" : "Range: 0-1",
            "description" : "0 = Local currency. 1 = Euro currency. This parameter is used to specify the currency of all amounts and balances."
          },
          {
            "fieldName" : "account_prepaid_empty_limit",
            "placeholder" : "Range: (-999 999 999 999) – 999 999 999 999, <EMPTY>",
            "description" : "This parameter gives the lowest allowed credit limit on the account. The <EMPTY> value is only allowed in an UPDATE request, and will remove the existing Account Prepaid Empty Limit"
          },
          {
            "fieldName" : "local_provider_type",
            "placeholder" : "Range: 1 - 2",
            "description" : "This parameter contains the type of local provider the subscriber is. The parameter will only be provided when the subscriber is a local provider or when creating a local provider. Values: 1 = local provider, 2 = consistent local provider"
          }
        ]
      },
      {
        "blockName": "Charging",
        "fields" : [
          {
            "fieldName" : "charging_type",
            "placeholder" : "Range: 1-8",
            "description" : "This parameter indicates how the request is to be charged and which charging mechanism to use.<br>1 = Check order and make reservation.<br>2 = Perform order and make deduction.<br>3 = Perform order and commit reservation.<br>4 = Rollback reservation.<br>5 = Fetch allowed options.<br>6 = Rate and Check (reserved for future use).<br>8 = Perform order, rate for CDR inclusion, no deduction."
          },
          {
            "fieldName" : "charging_indicator",
            "placeholder" : "Range: 0-2",
            "description" : "0 = (or parameter not present) Successful.<br>1 = No charge (free counter stepped).<br>2 = No charge (free counter not stepped)"
          },
          {
            "fieldName" : "correlation_id",
            "placeholder" : "Range: 0 – 2147483647",
            "description" : "This parameter is used to correlate a reservation."
          }
        ]
      },
      {
        "blockName": "Promotion",
        "fields": [
          {
            "fieldName" : "promotion_plan_id",
            "placeholder" : "Range: 1 - 4 characters",
            "description" : "Space not allowed. This parameter contains the identity of the promotion plan currently applicable for a subscriber"
          },
          {
            "fieldName" : "promotion_start_date",
            "placeholder" : "Range: YYYY-MM-DD",
            "description" : "The start date of validity period of the promotion plan."
          },
          {
            "fieldName" : "promotion_end_date",
            "placeholder" : "Range: YYYY-MM-DD",
            "description" : "The end date of validity period of the promotion plan"
          }
        ]
      },
      {
        "blockName": "Subordinate",
        "fields" : [
          {
            "fieldName" : "master",
            "placeholder" : "Range: 1 - 28 digits",
            "description" : "Subscriber number of the master subscriber to which a subscriber shall be or is linked"
          }
        ]
      },
      {
        "blockName": "SubscriberFaF",
        "fields" : [
          {
            "fieldName" : "",
            "placeholder" : "",
            "description" : ""
          },
          {
            "fieldName" : "",
            "placeholder" : "",
            "description" : ""
          },
          {
            "fieldName" : "",
            "placeholder" : "",
            "description" : ""
          },
          
        ]
      },
      {
        "blockName": "AccountFaF"
      },
      {
        "blockName": "PeriodicAccountManagement"
      }
    ];
  }

  ngOnInit() {

  }

  initTooltip() {
    $(".pop").popover({ trigger: "manual" , html: true, animation:false})
    .on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide");
            }
        }, 300);
});
  }

}
