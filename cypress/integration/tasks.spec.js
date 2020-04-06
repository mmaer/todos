describe('Tasks', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  })

  it('should add task', () => {
    cy.get('.add-todo').type('New task{enter}');
  });

  it('should displays input with placeholder', () => {
    cy.get('.todo-view .todo-view__label').contains('New task');
  });

  it('should complete task', () => {
    cy.get('.todo-view__toggle').click();
    cy.get('.todo-view__label').should('have.class', 'todo-view__label--completed');
    cy.get('.todo-view__toggle').click();
    cy.get('.todo-view__label').should('not.have.class', 'todo-view__label--completed');
  });

  it('should edit task', () => {
    cy.get('.todo-view .todo-view__label').dblclick()
    cy.get('.todo-editing').should('have.value', 'New task')

    cy.get('.todo-editing').clear().type('New task 2{enter}');
    cy.get('.todo-view .todo-view__label').contains('New task 2');
  });

  it('should remove task', () => {
    cy.get('.todo-view__remove').click({ force: true });
    cy.get('.app__main').should('not.be.visible');
    cy.get('.footer').should('not.be.visible');
  });

  it('should toggle completed tasks statuses', () => {
    cy.get('.add-todo').type('New task{enter}');
    cy.get('.add-todo').type('New task1{enter}');

    cy.get('.toggle-completed-statuses + label').click();
    cy.get('.todo-view__label').should('have.class', 'todo-view__label--completed');

    cy.get('.toggle-completed-statuses + label').click();
    cy.get('.todo-view__label').should('not.have.class', 'todo-view__label--completed');
  });
});
