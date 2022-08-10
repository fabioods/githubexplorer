import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 4.8rem;
  color: #3a3a3a;
  margin-top: 8rem;
  max-width: 450px;
  line-height: 5.6rem;

  @media (max-width: 740px) {
    margin-top: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }

  @media (max-width: 400px) {
    font-size: 3rem;
  }
`;

interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  margin-top: 4rem;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 2.4rem;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c33030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }

  @media (max-width: 740px) {
    display: flex;
    flex-direction: column;
    min-height: 150px;

    input {
      border-radius: 5px;
      font-size: 2.5rem;
    }

    button {
      border-radius: 0.5rem;
      flex: 1;
      width: auto;
      margin-top: 0.5rem;
      font-size: 2.5rem;
    }
  }

  @media (max-width: 400px) {
    input {
      font-size: 2rem;
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 8rem;
  max-width: 700px;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    background: #fff;
    padding: 2.4rem;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 1rem;
    }

    img {
      border-radius: 50%;
      width: 64px;
      height: 64px;
    }

    div {
      margin: 0 1.6rem;
      flex: 1;

      strong {
        font-size: 2rem;
        color: #3d3d4d;
      }
      p {
        color: #a8a8b3;
        font-size: 1.8rem;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
  /* a + a {
    margin-top: 1rem;
  } */
`;

export const Error = styled.span`
  margin-top: 0.8rem;
  display: block;
  color: #c33030;
`;
