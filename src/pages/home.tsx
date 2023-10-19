import { FC } from 'react'
import { StyledBoxesWrapper, StyledHomeWrapper } from './styles'
import {
  ComponentAWithHOC,
  ComponentBWithHOC,
  ComponentCWithHOC,
} from '../components/components'
import DisplayValue from '../components/display-value'

const Home: FC = () => {
  return (
    <StyledHomeWrapper data-testid="home-wrapper">
      <h1 data-testid="page-title">Simple Counter w/ Context API & HOCs</h1>
      <hr />
      <DisplayValue />
      <StyledBoxesWrapper>
        <ComponentAWithHOC />
        <ComponentBWithHOC />
        <ComponentCWithHOC />
      </StyledBoxesWrapper>
    </StyledHomeWrapper>
  )
}

export default Home
