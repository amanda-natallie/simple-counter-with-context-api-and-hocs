import React, { useContext } from 'react'
import { StyledDisplayValue } from './styles'
import { ValueContext } from '../contexts'

const DisplayValue: React.FC = () => {
  const value = useContext(ValueContext)

  return (
    <StyledDisplayValue>
      <h2 data-testid="current-value">Value: {value}</h2>
    </StyledDisplayValue>
  )
}

export default DisplayValue
