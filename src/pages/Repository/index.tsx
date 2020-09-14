import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/Logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repoFullName: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const { repoFullName } = params;
  return (
    <>
      <Header>
        <img src={logo} alt="Logotipo Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/4959183?s=460&u=9fe07d561d32ac3258f44b7f403dbe0924c7de84&v=4"
            alt="Repo img"
          />
          <div>
            <strong>fabioods/sequelize</strong>
            <p>Descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>12</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>100</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="/">
          <div>
            <strong>Descrição</strong>
            <p>Autor</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="/">
          <div>
            <strong>Descrição</strong>
            <p>Autor</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="/">
          <div>
            <strong>Descrição</strong>
            <p>Autor</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
