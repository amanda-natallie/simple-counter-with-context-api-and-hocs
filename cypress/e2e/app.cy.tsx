import { verifyButtons } from '../support/utils'

describe('E2E tests for the Counter App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should display the home page', () => {
    cy.getByDataTestId('home-wrapper').should('exist')
  })

  it('should display the title', () => {
    cy.getByDataTestId('page-title').should(
      'contain',
      'Simple Counter w/ Context API & HOCs',
    )
  })

  it('should display the initial value', () => {
    cy.getByDataTestId('current-value').should('contain', '0')
  })

  it('should display all three components', () => {
    cy.getByDataTestId('interact-box-2').should('exist')
    cy.getByDataTestId('interact-box-20').should('exist')
    cy.getByDataTestId('interact-box-200').should('exist')
  })

  it('should display the correct increment value for each box', () => {
    cy.getByDataTestId('interact-title-2').should(
      'contain',
      'Interact using multiples of 2',
    )
    cy.getByDataTestId('interact-title-20').should(
      'contain',
      'Interact using multiples of 20',
    )
    cy.getByDataTestId('interact-title-200').should(
      'contain',
      'Interact using multiples of 200',
    )
  })

  it('should display the increment buttons for each box', () => {
    verifyButtons(2, 'increment')
    verifyButtons(20, 'increment')
    verifyButtons(200, 'increment')
  })
})
