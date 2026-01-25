import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AdminLoginPage from "../pages/AdminLoginPage";

Given("I access the admin login page", () => {
  AdminLoginPage.visit();
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

