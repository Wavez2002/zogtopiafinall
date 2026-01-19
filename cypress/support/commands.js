Cypress.Commands.add('openLogin', () => {
  cy.get('a.rprof').last().click()
  cy.contains('.form-button', 'ავტორიზაცია').click()
  cy.get('.input-div.alert img[src*="input.svg"]').should('be.visible')
})
Cypress.Commands.add('wrongPassLogin', (user) => {
  cy.get('a.rprof').last().click()
  cy.get('.imail').first().type(user.email)
  cy.get('.ipass').first().type(user.password)
  cy.contains('.form-button', 'ავტორიზაცია').click()
})
Cypress.Commands.add('registerUser', (user) => {
    cy.get('a.rprof').last().click()
    
    cy.contains('გაიარეთ რეგისტრაცია').click()
    
    cy.get('.ismile[placeholder="სახელი გვარი"]').first().type(user.firstName)
    cy.get('.imail[placeholder="ელ.ფოსტა"]').first().type(user.email)
    cy.get('input[name="personal_id"]').last().type(user.personalId)
    cy.get('input[name="phone"]').last().type(user.phone)
    cy.get('.ipass[placeholder="პაროლი"]').first().type(user.password)
    cy.get('.ipass[placeholder="პაროლის გამეორება"]').first().type(user.confirmPassword)
    
    cy.get('input[type="checkbox"]').check({ force: true })
    
    cy.contains('.regsub', 'რეგისტრაცია').click()
})

Cypress.Commands.add('checkEmptyCart', () => {
    cy.get('a[href*="/cart"]').last().click()
    
    cy.contains('კალათა ცარიელია').should('be.visible')
})
Cypress.Commands.add('addProductToCart', () => {
cy.get('.seepro').contains('პროდუქციის ნახვა').first().click()
cy.get('.product-cart').should('contain.text', 'დამატებულია').first().click()
cy.get('#cart-items-count').should('contain.text', '1')
})
