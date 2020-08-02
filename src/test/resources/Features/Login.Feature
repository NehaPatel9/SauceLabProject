Feature:

  @validCredential
  Scenario: User should able to login successfully.
  so that user get navigated to welcome page

    Given user is on homepage
    When  User enter valid username
    And   user enter valid password
    Then  user should able to click on login button
    And   user should able to login successfully and user should see welcome page

  @invalidCredential
  Scenario Outline: User should not be able to log in successfully.
  and user get an error message.

    Given user is on homepage
    When  User enters "<invalid_username>" in username inputbox
    And   User enters "<invalid_password>" in password inputbox
    And   user should able to click on login button
    Then  user should not be able to log in successfully and user should get an error message
    Examples:

      | invalid_username | invalid_password |
      | admin            |                  |
      |                  | admin123         |
#      | admin@123        | password         |
#      | 123              | admin123         |
#      | ADMIN            | admin123         |
#      | @admin           | ADMIN123         |
