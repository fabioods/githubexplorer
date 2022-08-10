import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const RepositoryInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;

  header {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;

    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
      margin-right: 2.4rem;
    }

    div {
      strong {
        font-size: 3.6rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.8rem;
        color: #737380;
        margin-top: 0.4rem;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 4rem;

    li {
      display: flex;
      flex-direction: column;
      margin-right: 9rem;

      strong {
        font-size: 3.6rem;
        color: #3d3d4d;
      }

      span {
        font-size: 1.8rem;
        color: #737380;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 8rem;

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
`;
