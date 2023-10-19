import React, { useContext } from 'react'
import { StateContext } from '../contexts'

const HigherOrderComponent = (
  WrappedComponent: React.ComponentType<{
    value: number
    incrementHandler: () => void
    decrementHandler: () => void
  }>,
  incrementBy: number,
) => {
  return function WithIncrement(props: any) {
    const { state, dispatch } = useContext(StateContext)

    const incrementHandler = () => {
      dispatch({ type: 'INCREMENT', payload: incrementBy })
    }

    const decrementHandler = () => {
      dispatch({ type: 'DECREMENT', payload: incrementBy })
    }

    return (
      <WrappedComponent
        value={state?.value || 0}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        {...props}
      />
    )
  }
}

export default HigherOrderComponent
