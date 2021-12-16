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
  const submitBtn = () => cy.get('button[id="submitBtn"]');
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
    submitBtn().should('exist');
    foobarInput().should('not.exist');
  })

  // Check fill out form and submit
  describe('Filling out form and submitting', () => {
    it('Checking inputs', () => {
      fNameInput().type('Mah first name');
      lNameInput().type('Mah last name');
      fNameInput().should('have.value', 'Mah first name');
      lNameInput().should('have.value', 'Mah last name');

      emailInput().type('mahemail@gmail.com');
      emailInput().should('have.value', 'mahemail@gmail.com');

      passInput().type('password123');
      passInput().should('have.value', 'password123');

      tosCheck().should('have.value', 'false');
      tosCheck().click();
      tosCheck().should('have.value', 'true');

      submitBtn().click();

      cy.contains('Mah first name').should('exist');
      cy.contains('mahemail@gmail.com').should('exist');

      fNameInput().should('have.value', '');
      lNameInput().should('have.value', '');
      emailInput().should('have.value', '');
      passInput().should('have.value', '');
      tosCheck().should('have.value', 'false');
    })
  })
})