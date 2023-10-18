import { FC } from 'react'
import HigherOrderComponent from './higher-order-component'
import { StyledGenericBox } from './styles'

interface ComponentProps {
  incrementHandler: () => void
  decrementHandler: () => void
}

interface ComponentsBoxProps extends ComponentProps {
  incrementBy: number
}

const INCREMENT_A = 2
const INCREMENT_B = 20
const INCREMENT_C = 200

const ComponentsBox: FC<ComponentsBoxProps> = ({
  incrementBy,
  incrementHandler,
  decrementHandler,
}) => (
  <StyledGenericBox data-testid={`interact-box-${incrementBy}`}>
    <p data-testid={`interact-title-${incrementBy}`}>
      Interact using multiples of {incrementBy}{' '}
    </p>

    <button data-testid={`increment-button-${incrementBy}`} onClick={incrementHandler}>
      +
    </button>
    <button data-testid={`decrement-button-${incrementBy}`} onClick={decrementHandler}>
      -
    </button>
  </StyledGenericBox>
)

const ComponentA: FC<ComponentProps> = ({ incrementHandler, decrementHandler }) => {
  return (
    <ComponentsBox
      {...{ incrementBy: INCREMENT_A, incrementHandler, decrementHandler }}
    />
  )
}

const ComponentB: FC<ComponentProps> = ({ incrementHandler, decrementHandler }) => {
  return (
    <ComponentsBox
      {...{ incrementBy: INCREMENT_B, incrementHandler, decrementHandler }}
    />
  )
}

const ComponentC: FC<ComponentProps> = ({ incrementHandler, decrementHandler }) => {
  return (
    <ComponentsBox
      {...{ incrementBy: INCREMENT_C, incrementHandler, decrementHandler }}
    />
  )
}

const ComponentAWithHOC = HigherOrderComponent(ComponentA, INCREMENT_A)
const ComponentBWithHOC = HigherOrderComponent(ComponentB, INCREMENT_B)
const ComponentCWithHOC = HigherOrderComponent(ComponentC, INCREMENT_C)

export { ComponentAWithHOC, ComponentBWithHOC, ComponentCWithHOC }
