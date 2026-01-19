describe('ავტორიზაცია', () => {

  beforeEach(() => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
  })

  it('TC-10: ავტორიზაცია ცარიელი ველებით', () => {
    cy.openLogin()
  })
  it('TC-08: ავტორიზაცია არასწორი პაროლით', () => {
    cy.fixture('zootopiaFixtures').then((data) => {

      cy.wrongPassLogin(data.invalidUser)
    })
    cy.get('img[src*="input.svg"]').should('be.visible')

  })
})

describe('რეგისტრაცია', () => {

  beforeEach(() => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
  })

  it('TC-01: წარმატებული რეგისტრაცია', () => {
   
    cy.fixture('zootopiaFixtures').then((data) => {
      cy.registerUser(data.validRegistration)
    })

  })

})
describe('კალათა',()=>{
  beforeEach(() => {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
  })
  it('TC-16: ცარიელი კალათის შემოწმება',()=>{
    cy.checkEmptyCart()
  })

  it('TC-17: პროდუქტის კალათაში დამატება', () => {
    cy.addProductToCart()
  })

})
