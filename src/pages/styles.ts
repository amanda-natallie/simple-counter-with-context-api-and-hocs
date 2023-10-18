import styled, { css } from 'styled-components'

const flexStyles = css`
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex-wrap: wrap;
`

export const StyledHomeWrapper = styled.main`
  ${flexStyles};
  margin: auto;
  width: 75vw;
  justify-content: center;

  & hr {
    width: 100%;
  }
  @media (max-width: 596px) {
    width: 95vw;
  }
`
export const StyledBoxesWrapper = styled.section`
  ${flexStyles};
  width: 100%;
  @media (min-width: 872px) {
    flex-wrap: nowrap;
  }
`
