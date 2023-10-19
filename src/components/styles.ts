import styled, { css } from 'styled-components'
import theme from '../theme'

const flexStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledGenericBox = styled.article`
  ${flexStyles};
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  padding: 30px;
  width: 33.33%;
  border-radius: 8px;
  border: 1px solid ${theme.palette.grayScale[500]};
  background-color: ${theme.palette.grayScale[50]};

  & p {
    text-align: center;
    font-size: 18px;
  }

  & button {
    width: 40%;
    height: 40px;
    outline: none;
    border: 0;
    font-size: 18px;
    color: ${theme.palette.grayScale[50]};
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 10px 10px 21px -4px ${theme.palette.grayScale.shadow};
    }
    &:first-of-type {
      background-color: ${theme.palette.system.increase};
    }

    &:last-of-type {
      background-color: ${theme.palette.system.decrease};
    }
  }

  @media (max-width: 871px) {
    width: 100%;
    flex-direction: row;

    & p {
      order: 2;
    }
    & button {
      width: auto;
      padding-inline: 20px;

      &:first-of-type {
        order: 1;
      }
      &:last-of-type {
        order: 3;
      }
    }
  }

  @media (max-width: 471px) {
    gap: 16px;
    & p {
      width: 100%;
      order: 0;
    }
    & button {
      width: 45%;
    }
  }
  @media (max-width: 328px) {
    & button {
      width: 40%;
    }
  }

  @media (min-width: 1939px) {
    & p {
      width: 100%;
    }
  }
`

export const StyledDisplayValue = styled.section`
  ${flexStyles};
  width: 100%;

  & h2 {
    font-size: 25px;
  }
`
