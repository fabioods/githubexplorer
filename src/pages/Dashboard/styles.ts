import styled from 'styled-components';
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

export const Form = styled.form`
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
