import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AdminLoginPage from "../pages/AdminLoginPage";

Given("I access the admin login page", () => {
  AdminLoginPage.visitLoginPage();
});

When("I login with valid credentials", () => {
  AdminLoginPage.fillEmail(Cypress.env("ADMIN_EMAIL"));
  AdminLoginPage.fillPassword(Cypress.env("ADMIN_PASSWORD"));
  AdminLoginPage.submit();
});

Then("I should see the dashboard", () => {
  cy.location('pathname', { timeout: 15000 })
    .should('include', '/admin/dashboard')
});

When("I login with {string} and {string}", (email, password) => {
  if (email) {
    AdminLoginPage.fillEmail(email);
  }

  if (password) {
    AdminLoginPage.fillPassword(password);
  }

  AdminLoginPage.submit();
});

Then("I should see an authentication error", () => {
  cy.location("pathname", { timeout: 10000 })
    .should("include", "/admin/login");
});

Then('I should see the dashboard', () => {
  dashboardPage.dashboardShouldBeVisible()
})



