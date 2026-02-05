import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AdminLoginPage from "../pages/AdminLoginPage";
import DashboardPage from "../pages/DashboardPage";

const adminLoginPage = new AdminLoginPage();
const dashboardPage = new DashboardPage();

Given("I access the admin page", () => {
  adminLoginPage.visitAdminPage();
});

When("I login with valid credentials", () => {
  adminLoginPage.fillEmail(Cypress.env("ADMIN_EMAIL"));
  adminLoginPage.fillPassword(Cypress.env("ADMIN_PASSWORD"));
  adminLoginPage.submit();
});

When("I login with {string} and {string}", (email, password) => {
  if (email) {
    adminLoginPage.fillEmail(email);
  }

  if (password) {
    adminLoginPage.fillPassword(password);
  }

  adminLoginPage.submit();
});

Then("I should remain on the admin login page", () => {
  cy.url().should("include", "/admin");
  adminLoginPage.loginFormShouldBeVisible();
});

Then("I should see the dashboard", () => {
  dashboardPage.dashboardShouldBeVisible();
});
