Feature: Admin Login

    As an administrator
    I want to log into the admin painel
    So that i can manege the system

  Scenario: Access admin login page
    Given I access the admin login page
    When I login with valid credentials
    Then I should see the dashboard