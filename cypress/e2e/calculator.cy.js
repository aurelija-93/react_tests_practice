describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should be able to perform addition', () => {
    cy.get('#number1').click();
    cy.get('#operator-add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should be able to perform subtraction', () => {
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('should be able to perform multiplication', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15')
  })

  it('should be able to perform division', () => {
    cy.get('#number2').click();
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('should be able to chain operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator-add').click();
    cy.get('#number1').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '21')
  })

  it('should be able to show a positive output', () => {
    cy.get('#number4').click();
    cy.get('#operator-add').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '11')
  })

  it('should be able to show a negative output', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3')
  })

  it('should be able to show a decimal output', () => {
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.8')
  })

  // this test doesn't work in cypress:

  // it('should be able to show a very large number', () => {
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#operator-multiply').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#operator-equals').click();
  //   cy.get('.display').should('contain', '9.99999999998e+23')

  // version for cypress:

  it('should be able to show a very large number', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '999998000001')
  })
})