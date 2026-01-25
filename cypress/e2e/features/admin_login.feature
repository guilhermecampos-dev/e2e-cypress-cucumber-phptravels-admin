Feature: Admin Login

  As an administrator
  I want to log into the admin panel
  So that I can manage the system

  Scenario Outline: Admin login with invalid credentials
    Given I access the admin login page
    When I login with "<email>" and "<password>"
    Then I should see an authentication error

    Examples:
      | email                | password     |
      | wrong@admin.com      | demoadmin    |
      | admin@phptravels.com | wrongpass    |
      | wrong@admin.com      | wrongpass    |
      |                      | demoadmin    |
      | admin@phptravels.com |              |
