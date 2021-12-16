describe('User Onboarding App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

    // Helpers
    const fNameInput = () => cy.get('input[name=first_name]');
    const lNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email');
    const passInput = () => cy.get('input[name=password]');
    const tosCheck = () => cy.get('input[name=tos]');
    const foobarInput = () => cy.get('input[name=foobarboii]');

    // Sanity Checks
    it('performing sanity checks...', () => {
      expect(2 * 3).to.equal(6);
      expect(2 + 3).to.equal(5);
      expect({}).not.to.equal({});
    })

    // Testing for existance
    it('correct elements showing', () => {
      fNameInput().should('exist');
      lNameInput().should('exist');
      emailInput().should('exist');
      passInput().should('exist');
      tosCheck().should('exist');
      foobarInput().should('not.exist');
    })

    it('Checking name inputs', () => {
      fNameInput().type('Mah first name');
      lNameInput().type('Mah last name');
      fNameInput().should('have.value', 'Mah first name');
      lNameInput().should('have.value', 'Mah last name');
    })


  
})