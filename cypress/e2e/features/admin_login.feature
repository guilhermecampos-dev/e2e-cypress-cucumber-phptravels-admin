Feature: Admin Login

  As an administrator
  I want to log into the admin panel
  So that I can manage the system

  Scenario Outline: Admin login with invalid credentials
    Given I access the admin page
    When I login with "<email>" and "<password>"
    Then I should remain on the login page

    Examples:
      | email                | password     |
      | wrong@admin.com      | demoadmin    |
      | admin@phptravels.com | wrongpass    |
      | wrong@admin.com      | wrongpass    |
      |                      | demoadmin    |
      | admin@phptravels.com |              |
