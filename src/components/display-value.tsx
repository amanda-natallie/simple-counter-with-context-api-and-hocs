import React, { useContext } from 'react'
import { ValueContext } from 'contexts'
import { StyledDisplayValue } from './styles'

const DisplayValue: React.FC = () => {
  const value = useContext(ValueContext)

  return (
    <StyledDisplayValue>
      <h2 data-testid="current-value">Value: {value}</h2>
    </StyledDisplayValue>
  )
}

export default DisplayValue
