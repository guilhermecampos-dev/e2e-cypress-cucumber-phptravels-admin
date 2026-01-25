import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AdminLoginPage from "../pages/AdminLoginPage";
import DashboardPage from "../pages/DashboardPage";

const adminloginpage = new AdminLoginPage()
const dashboardpage = new DashboardPage()

Given("I access the admin login page", () => {
  adminloginpage.visitLoginPage();
});

When("I login with valid credentials", () => {
  adminloginpage.fillEmail(Cypress.env("ADMIN_EMAIL"));
  adminloginpage.fillPassword(Cypress.env("ADMIN_PASSWORD"));
  adminloginpage.submit();
});

Then("I should see the dashboard", () => {
  cy.location('pathname', { timeout: 15000 })
    .should('include', '/admin/dashboard')
});

When("I login with {string} and {string}", (email, password) => {
  if (email) {
    adminloginpage.fillEmail(email);
  }

  if (password) {
    adminloginpage.fillPassword(password);
  }

  adminloginpage.submit();
});

Then("I should see an authentication error", () => {
  cy.location("pathname", { timeout: 10000 })
    .should("include", "/admin/login");
});

Then('I should see the dashboard', () => {
  dashboardpage.dashboardShouldBeVisible()
})



