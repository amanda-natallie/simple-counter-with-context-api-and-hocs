import theme from '../../src/theme'

export const checkCSSProperty = (
  inputName: Cypress.Chainable<JQuery<HTMLElement>> | Cypress.Chainable<Element>,
  property: string,
  expectedValue: string,
) => {
  inputName.invoke('css', property).then(arg => {
    expect(arg).to.eq(expectedValue)
  })
}

export const verifyButtons = (incrementBy: number, type: 'increment' | 'decrement') => {
  const button = cy.getByDataTestId(`${type}-button-${incrementBy}`)

  button
    .should('exist')
    .should('contain', '+')
    .should('be.visible')
    .should('not.be.disabled')
    .should('not.be.empty')

  checkCSSProperty(
    button,
    'background-color',
    type === 'increment' ? theme.palette.system.increase : theme.palette.system.decrease,
  )
}
