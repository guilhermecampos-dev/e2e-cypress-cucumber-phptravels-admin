class AdminLoginPage {

  visit() {
    cy.visit('/admin/login')
  }

  fillEmail(email) {
    cy.get('input[name="email"]').type(email)
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password)
  }

 submit() {
  cy.get('button[type="submit"]').click();
}

dashboardShouldBeVisible() {
  cy.contains('Dashboard', { timeout: 15000 }).should('be.visible');
}
}

export default new AdminLoginPage()
