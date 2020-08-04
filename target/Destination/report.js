$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Login.Feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "User should not be able to log in successfully.",
  "description": "and user get an error message.",
  "id": ";user-should-not-be-able-to-log-in-successfully.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003cinvalid_username\u003e\" in username inputbox",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cinvalid_password\u003e\" in password inputbox",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": ";user-should-not-be-able-to-log-in-successfully.;",
  "rows": [
    {
      "cells": [
        "invalid_username",
        "invalid_password"
      ],
      "line": 24,
      "id": ";user-should-not-be-able-to-log-in-successfully.;;1"
    },
    {
      "cells": [
        "admin",
        ""
      ],
      "line": 25,
      "id": ";user-should-not-be-able-to-log-in-successfully.;;2"
    },
    {
      "cells": [
        "",
        "admin123"
      ],
      "line": 26,
      "id": ";user-should-not-be-able-to-log-in-successfully.;;3"
    },
    {
      "cells": [
        "admin@123",
        "password"
      ],
      "line": 27,
      "id": ";user-should-not-be-able-to-log-in-successfully.;;4"
    },
    {
      "cells": [
        "123",
        "admin123"
      ],
      "line": 28,
      "id": ";user-should-not-be-able-to-log-in-successfully.;;5"
    },
    {
      "cells": [
        "ADMIN999",
        "admin123"
      ],
      "line": 29,
      "id": ";user-should-not-be-able-to-log-in-successfully.;;6"
    },
    {
      "cells": [
        "@admin",
        "ADMIN123"
      ],
      "line": 30,
      "id": ";user-should-not-be-able-to-log-in-successfully.;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19836110101,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should not be able to log in successfully.",
  "description": "and user get an error message.",
  "id": ";user-should-not-be-able-to-log-in-successfully.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"admin\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 3401436836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 5399466765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enters_in_password_inputbox(String)"
});
formatter.result({
  "duration": 2617138956,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 2288637170,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 5811526817,
  "status": "passed"
});
formatter.after({
  "duration": 1869155547,
  "status": "passed"
});
formatter.before({
  "duration": 14508207145,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should not be able to log in successfully.",
  "description": "and user get an error message.",
  "id": ";user-should-not-be-able-to-log-in-successfully.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters \"admin123\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 858136531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 829063357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enters_in_password_inputbox(String)"
});
formatter.result({
  "duration": 3243784680,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 1396216927,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 3234253370,
  "status": "passed"
});
formatter.after({
  "duration": 1480113429,
  "status": "passed"
});
formatter.before({
  "duration": 84305377649,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should not be able to log in successfully.",
  "description": "and user get an error message.",
  "id": ";user-should-not-be-able-to-log-in-successfully.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"admin@123\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters \"password\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 718296679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@123",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 794868889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enters_in_password_inputbox(String)"
});
formatter.result({
  "duration": 1008950329,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 1324870428,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 5946967807,
  "status": "passed"
});
formatter.after({
  "duration": 1177856660,
  "status": "passed"
});
formatter.before({
  "duration": 13365557878,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should not be able to log in successfully.",
  "description": "and user get an error message.",
  "id": ";user-should-not-be-able-to-log-in-successfully.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"123\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters \"admin123\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 696801701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 847470477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enters_in_password_inputbox(String)"
});
formatter.result({
  "duration": 718088740,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 1360945724,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 1322662520,
  "status": "passed"
});
formatter.after({
  "duration": 1070302784,
  "status": "passed"
});
formatter.before({
  "duration": 89291768313,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should not be able to log in successfully.",
  "description": "and user get an error message.",
  "id": ";user-should-not-be-able-to-log-in-successfully.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"ADMIN999\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters \"admin123\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 722190863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADMIN999",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 698799885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enters_in_password_inputbox(String)"
});
formatter.result({
  "duration": 739571671,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 2343828633,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 2914210175,
  "status": "passed"
});
formatter.after({
  "duration": 1206772317,
  "status": "passed"
});
formatter.before({
  "duration": 13693045401,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should not be able to log in successfully.",
  "description": "and user get an error message.",
  "id": ";user-should-not-be-able-to-log-in-successfully.;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@invalidCredential"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User enters \"@admin\" in username inputbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters \"ADMIN123\" in password inputbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user should able to click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user should not be able to log in successfully and user should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_homepage()"
});
formatter.result({
  "duration": 1284477038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@admin",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enters_in_username_inputbox(String)"
});
formatter.result({
  "duration": 1240195267,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADMIN123",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.user_enters_in_password_inputbox(String)"
});
formatter.result({
  "duration": 1387369229,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 2165589560,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 3118790202,
  "status": "passed"
});
formatter.after({
  "duration": 1447520900,
  "status": "passed"
});
});