class BasePage{
    visit(url){
        cy.visit(url)
    }

    get(selector){
        return cy.get(selector)
    }

    contains(text){
        return cy.contains(text)
    }
}export default BasePage