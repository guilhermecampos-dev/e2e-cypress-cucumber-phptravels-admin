import BasePage from "./BasePage";

class AdminLoginPage extends BasePage {

  visitAdminPage() {
    cy.visit("/admin", {
      failOnStatusCode: false,
      timeout: 60000
    });
  }

  fillEmail(email) {
    this.get('input[name="email"]')
      .should("be.visible")
      .clear()
      .type(email);
  }

  fillPassword(password) {
    this.get('input[name="password"]')
      .should("be.visible")
      .clear()
      .type(password);
  }

  submit() {
    this.get('button[type="submit"]')
      .should("be.visible")
      .click();
  }

  loginFormShouldBeVisible() {
    this.get("form").should("be.visible");
  }
}

export default AdminLoginPage;
