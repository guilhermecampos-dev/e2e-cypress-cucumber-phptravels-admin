import BasePage from './BasePage'

class DashboardPage extends BasePage{
    dashboardShouldBeVisible(){
        this.urlShouldInclude('/admin/dashboard')
        this.containsText('Dashboard')
    }

    getWelcomeMessage(){
        return this.get('.welcome')
    }
} export default DashboardPage