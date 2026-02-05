import BasePage from "./BasePage";

class DashboardPage extends BasePage {

  dashboardShouldBeVisible() {
    cy.url({ timeout: 20000 }).should("include", "/admin");
    this.get("body").should("be.visible");
    this.containsText("Dashboard");
  }

  getWelcomeMessage() {
    return this.get("body");
  }
}

export default DashboardPage;
