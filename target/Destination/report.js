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
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5455027699,
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
  "duration": 197883121,
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
  "duration": 30169989,
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
  "duration": 19585147,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 236574172,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 29705025,
  "status": "passed"
});
formatter.after({
  "duration": 766098700,
  "status": "passed"
});
formatter.before({
  "duration": 6203543005,
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
  "duration": 35364017,
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
  "duration": 22545386,
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
  "duration": 22983577,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_able_to_click_on_login_button()"
});
formatter.result({
  "duration": 235321180,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_should_not_be_able_to_log_in_successfully_and_user_should_get_an_error_message()"
});
formatter.result({
  "duration": 29377944,
  "status": "passed"
});
formatter.after({
  "duration": 743798290,
  "status": "passed"
});
});