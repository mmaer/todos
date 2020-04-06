describe('Home Page', () => {
  before(() => {
    cy.visit('http://localhost:3000')
  })

  it('should displays title', () => {
    cy.get('.app__title').contains('Todos')
  })

  it('should displays input with placeholder', () => {
    cy.get('.add-todo').should('have.attr', 'placeholder', 'What needs to be done?')
  })
})