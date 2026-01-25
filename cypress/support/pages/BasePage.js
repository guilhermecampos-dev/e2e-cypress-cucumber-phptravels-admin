class BasePage{
    visit(url){
        cy.visit(url)
    }

    get(selector){
        return cy.get(selector)
    }

    contains(text){
        return cy.contains(text).should('be.visible')
    }

    urlShouldInclude(path){
        cy.location('pathname').should('include', path)
    }
}export default BasePage