class BasePage {

  visit(url) {
    cy.visit(url, {
      failOnStatusCode: false,
      timeout: 60000
    });
  }

  get(selector) {
    return cy.get(selector, { timeout: 30000 });
  }

  containsText(text) {
    return cy.contains(text, { timeout: 30000 }).should("be.visible");
  }

  urlShouldInclude(path) {
    cy.url({ timeout: 20000 }).should("include", path);
  }
}

export default BasePage;
