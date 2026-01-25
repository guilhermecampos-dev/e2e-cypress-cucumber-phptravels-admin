import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I access the admin login page", () => {
  cy.visit("https://phptravels.net/admin");
});

When("I login with valid credentials", () => {
  cy.get('input[name="email"]').clear().type("admin@phptravels.com");
  cy.get('input[name="password"]').clear().type("demoadmin");
  cy.contains("Login").click();

  cy.url().then((url) => {
    cy.log("URL ATUAL: " + url);
  });
});

Then("I should see the dashboard", () => {
  cy.url().should("include", "/admin/dashboard");
});
