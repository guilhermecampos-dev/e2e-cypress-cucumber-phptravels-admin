import BasePage from './BasePage'
class AdminLoginPage extends BasePage {

  visitLoginPage() {
    this.visit('/admin/login')
  }

  login(email, password){
    this.fillEmail(email)
    this.fillPassword(password)
    this.submit()
  }

  fillEmail(email) {
    this.get('input[name="email"]').type(email)
  }

  fillPassword(password) {
    this.get('input[name="password"]').type(password)
  }

submit() {
  this.get('button[type="submit"]').click();
}


}export default AdminLoginPage
