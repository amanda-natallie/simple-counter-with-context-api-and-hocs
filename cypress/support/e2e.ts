import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      bodyClick(): Chainable<void>
      getByDataTestId: (dataTestId: string) => Chainable<Element>
      shouldSelectorNotExist: (selector: string) => void
      shouldBeVisible: (selector: Chainable) => void
    }
  }
}

Cypress.Commands.add('bodyClick', () => {
  cy.get('body').click()
})

Cypress.Commands.add('shouldBeVisible', selector => {
  selector.should('be.visible')
})

Cypress.Commands.add('getByDataTestId', dataTestId => {
  cy.get(`[data-testid=${dataTestId}]`)
})
