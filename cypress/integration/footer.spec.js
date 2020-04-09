describe('Footer', () => {
  before(() => {
    cy.visit('http://localhost:3000')

    cy.get('.add-todo').type('New task1{enter}');
    cy.get('.add-todo').type('New task2{enter}');
    cy.get('.add-todo').type('New task3{enter}');
    cy.get('.add-todo').type('New task4{enter}');
  })

  it('should display all active tasks when active filter is clicked', () => {
    cy.get('.filters__link[href*="/active"]').click();
    cy.get('.todo-list').children().should('have.length', 4);
  });

  it('should display none tasks when completed filter is clicked', () => {
    cy.get('.filters__link[href*="/completed"]').click();
    cy.get('.todo-list').children().should('have.length', 0);
  });

  it('should display 4 items left', () => {
    cy.get('.footer__todo-count > strong').contains(4);
  })

  it('should not display "Clear completed" button', () => {
    cy.get('.footer__clear-completed').should('not.be.visible');
  })

  it('should display three active tasks when one is completed', () => {
    cy.get('.filters__link[href*="/all"]').click();
    cy.get('.todo-view__toggle').first().click();

    cy.get('.todo-list').children().should('have.length', 4);

    cy.get('.filters__link[href*="/active"]').click();
    cy.get('.todo-list').children().should('have.length', 3);
  });

  it('should display 3 items left', () => {
    cy.get('.footer__todo-count > strong').contains(3);
  })

  it('should display one completed task when completed filter is clicked', () => {
    cy.get('.filters__link[href*="/completed"]').click();
    cy.get('.todo-list').children().should('have.length', 1);
  });

  it('should clear completed tasks', () => {
    cy.get('.footer__clear-completed').click();
    cy.get('.todo-list').children().should('have.length', 0);

    cy.get('.filters__link[href*="/all"]').click();
    cy.get('.todo-list').children().should('have.length', 3);
  });
})