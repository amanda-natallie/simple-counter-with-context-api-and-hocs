import { render, screen, waitFor } from '@testing-library/react'
import App from '../../App'

describe('Testing the Counter App', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('Renders the main page', () => {
    const pageTitle = screen.getByTestId('page-title')
    expect(pageTitle).toBeDefined()
    expect(pageTitle).toHaveProperty(
      'textContent',
      'Simple Counter w/ Context API & HOCs',
    )
  })

  test('Renders the counter', () => {
    const counter = screen.getByTestId('current-value')
    expect(counter).toBeDefined()
    expect(counter).toHaveProperty('textContent', 'Value: 0')
  })

  test('Renders the increment buttons', () => {
    const incrementButtonA = screen.getByTestId('increment-button-2')
    const incrementButtonB = screen.getByTestId('increment-button-20')
    const incrementButtonC = screen.getByTestId('increment-button-200')
    expect(incrementButtonA).toBeDefined()
    expect(incrementButtonB).toBeDefined()
    expect(incrementButtonC).toBeDefined()
  })

  test('Incrementing by 2', () => {
    const incrementButtonA = screen.getByTestId('increment-button-2')
    const counter = screen.getByTestId('current-value')
    expect(counter).toHaveProperty('textContent', 'Value: 0')
    incrementButtonA.click()
    waitFor(() => {
      expect(counter).toHaveProperty('textContent', 'Value: 2')
    })
  })

  test('Incrementing by 20', () => {
    const incrementButtonB = screen.getByTestId('increment-button-20')
    const counter = screen.getByTestId('current-value')
    expect(counter).toHaveProperty('textContent', 'Value: 0')
    incrementButtonB.click()
    waitFor(() => {
      expect(counter).toHaveProperty('textContent', 'Value: 20')
    })
  })

  test('Incrementing by 200', () => {
    const incrementButtonC = screen.getByTestId('increment-button-200')
    const counter = screen.getByTestId('current-value')
    expect(counter).toHaveProperty('textContent', 'Value: 0')
    incrementButtonC.click()
    waitFor(() => {
      expect(counter).toHaveProperty('textContent', 'Value: 200')
    })
  })

  test('Decrementing by 2', () => {
    const incrementButtonA = screen.getByTestId('increment-button-2')
    const decrementButtonA = screen.getByTestId('decrement-button-2')
    const counter = screen.getByTestId('current-value')
    expect(counter).toHaveProperty('textContent', 'Value: 0')
    incrementButtonA.click()
    waitFor(() => {
      expect(counter).toHaveProperty('textContent', 'Value: 2')
    })
    decrementButtonA.click()
    waitFor(() => {
      expect(counter).toHaveProperty('textContent', 'Value: 0')
    })
  })

  test('Decrementing by 20', () => {
    const incrementButtonB = screen.getByTestId('increment-button-20')
    const decrementButtonB = screen.getByTestId('decrement-button-20')
    const counter = screen.getByTestId('current-value')
    expect(counter).toHaveProperty('textContent', 'Value: 0')
    incrementButtonB.click()
    waitFor(() => {
      expect(counter).toHaveProperty('textContent', 'Value: 20')
    })
    decrementButtonB.click()
    waitFor(() => {
      expect(counter).toHaveProperty('textContent', 'Value: 0')
    })
  })

  test('Decrementing by 200', () => {
    const incrementButtonC = screen.getByTestId('increment-button-200')
    const decrementButtonC = screen.getByTestId('decrement-button-200')
    const counter = screen.getByTestId('current-value')
    expect(counter).toHaveProperty('textContent', 'Value: 0')
    incrementButtonC.click()
    waitFor(() => {
      expect(counter).toHaveProperty('textContent', 'Value: 200')
    })
    decrementButtonC.click()
    waitFor(() => {
      expect(counter).toHaveProperty('textContent', 'Value: 0')
    })
  })
})
