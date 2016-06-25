$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BarnesAndNoble.feature");
formatter.feature({
  "line": 1,
  "name": "Barnes and Noble Login, navigation and purchase functionality.",
  "description": "",
  "id": "barnes-and-noble-login,-navigation-and-purchase-functionality.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "1. As a valid user, user can log in to B\u0026N, navigate to a link, and search for a product",
  "description": "",
  "id": "barnes-and-noble-login,-navigation-and-purchase-functionality.;1.-as-a-valid-user,-user-can-log-in-to-b\u0026n,-navigate-to-a-link,-and-search-for-a-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is able to browse to the Barnes and Noble Website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user lands on home page \"Online Bookstore: Books, NOOK ebooks, Music, Movies \u0026 Toys | Barnes \u0026 Noble\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user can click on the sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter \"\u003cemail\u003e\" as email address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is logged into the \"Online Bookstore: Books, NOOK ebooks, Music, Movies \u0026 Toys | Barnes \u0026 Noble\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user can hover over Hobbiee and Collectbables",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user can click on Marvel Comics link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user lands on new page \"Marvel Comics, Special Collections, Hobbies \u0026 Collectibles | Barnes \u0026 Noble\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user can click on POP Marvel Deadpool Bobblehead",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user lands on Deadpool page \"POP Marvel (BOBBLE): Deadpool | 830395030524 | Item | Barnes \u0026 Noble\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user can click Add to Bag button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user can click on View Bag button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user lands on Shopping Bag Page, containing text \"Order Summary\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user can remove Deadpool from Bag",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "barnes-and-noble-login,-navigation-and-purchase-functionality.;1.-as-a-valid-user,-user-can-log-in-to-b\u0026n,-navigate-to-a-link,-and-search-for-a-product;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 23,
      "id": "barnes-and-noble-login,-navigation-and-purchase-functionality.;1.-as-a-valid-user,-user-can-log-in-to-b\u0026n,-navigate-to-a-link,-and-search-for-a-product;;1"
    },
    {
      "cells": [
        "axelajp@gmail.com",
        "Watermelons1"
      ],
      "line": 24,
      "id": "barnes-and-noble-login,-navigation-and-purchase-functionality.;1.-as-a-valid-user,-user-can-log-in-to-b\u0026n,-navigate-to-a-link,-and-search-for-a-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "1. As a valid user, user can log in to B\u0026N, navigate to a link, and search for a product",
  "description": "",
  "id": "barnes-and-noble-login,-navigation-and-purchase-functionality.;1.-as-a-valid-user,-user-can-log-in-to-b\u0026n,-navigate-to-a-link,-and-search-for-a-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is able to browse to the Barnes and Noble Website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user lands on home page \"Online Bookstore: Books, NOOK ebooks, Music, Movies \u0026 Toys | Barnes \u0026 Noble\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user can click on the sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter \"axelajp@gmail.com\" as email address",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter \"Watermelons1\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is logged into the \"Online Bookstore: Books, NOOK ebooks, Music, Movies \u0026 Toys | Barnes \u0026 Noble\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user can hover over Hobbiee and Collectbables",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user can click on Marvel Comics link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user lands on new page \"Marvel Comics, Special Collections, Hobbies \u0026 Collectibles | Barnes \u0026 Noble\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user can click on POP Marvel Deadpool Bobblehead",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user lands on Deadpool page \"POP Marvel (BOBBLE): Deadpool | 830395030524 | Item | Barnes \u0026 Noble\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user can click Add to Bag button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user can click on View Bag button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user lands on Shopping Bag Page, containing text \"Order Summary\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user can remove Deadpool from Bag",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "2. As a valid user, user can log in, search for a specific product via searchbar, add to bag, and checkout",
  "description": "",
  "id": "barnes-and-noble-login,-navigation-and-purchase-functionality.;2.-as-a-valid-user,-user-can-log-in,-search-for-a-specific-product-via-searchbar,-add-to-bag,-and-checkout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@scenario2"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user is able to browse to the Barnes and Noble Website",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user lands on home page \"Online Bookstore: Books, NOOK ebooks, Music, Movies \u0026 Toys | Barnes \u0026 Noble\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user can click on the sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "enter \"\u003cemail\u003e\" as email address",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "enter \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user is logged into the \"Online Bookstore: Books, NOOK ebooks, Music, Movies \u0026 Toys | Barnes \u0026 Noble\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user can click on search bar and search for The Zombie Survival Guide",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user clicks on Zombie Survival Guide link",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user lands on \"The Zombie Survival Guide: Complete Protection from the Living Dead\" page",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user clicks NOOKBOOK option",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user clicks Add to Bag button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user clicks view bag button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user lands on Shopping Bag Page, containing text \"Order Summary\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "click continue button",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "barnes-and-noble-login,-navigation-and-purchase-functionality.;2.-as-a-valid-user,-user-can-log-in,-search-for-a-specific-product-via-searchbar,-add-to-bag,-and-checkout;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 45,
      "id": "barnes-and-noble-login,-navigation-and-purchase-functionality.;2.-as-a-valid-user,-user-can-log-in,-search-for-a-specific-product-via-searchbar,-add-to-bag,-and-checkout;;1"
    },
    {
      "cells": [
        "axelajp@gmail.com",
        "Watermelons1"
      ],
      "line": 46,
      "id": "barnes-and-noble-login,-navigation-and-purchase-functionality.;2.-as-a-valid-user,-user-can-log-in,-search-for-a-specific-product-via-searchbar,-add-to-bag,-and-checkout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "2. As a valid user, user can log in, search for a specific product via searchbar, add to bag, and checkout",
  "description": "",
  "id": "barnes-and-noble-login,-navigation-and-purchase-functionality.;2.-as-a-valid-user,-user-can-log-in,-search-for-a-specific-product-via-searchbar,-add-to-bag,-and-checkout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@scenario2"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user is able to browse to the Barnes and Noble Website",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user lands on home page \"Online Bookstore: Books, NOOK ebooks, Music, Movies \u0026 Toys | Barnes \u0026 Noble\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user can click on the sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "enter \"axelajp@gmail.com\" as email address",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "enter \"Watermelons1\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user is logged into the \"Online Bookstore: Books, NOOK ebooks, Music, Movies \u0026 Toys | Barnes \u0026 Noble\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "user can click on search bar and search for The Zombie Survival Guide",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user clicks on Zombie Survival Guide link",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user lands on \"The Zombie Survival Guide: Complete Protection from the Living Dead\" page",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user clicks NOOKBOOK option",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user clicks Add to Bag button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user clicks view bag button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user lands on Shopping Bag Page, containing text \"Order Summary\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "click continue button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});