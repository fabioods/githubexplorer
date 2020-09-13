import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logo from '../../assets/Logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logotipo Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="#github">
          <img
            src="https://avatars3.githubusercontent.com/u/4959183?s=460&u=9fe07d561d32ac3258f44b7f403dbe0924c7de84&v=4"
            alt="Avatar"
          />
          <div>
            <strong>fabioods/graphql-server</strong>
            <p>Exemplo de estrutura com GraphQL Server utilizando MongoDB</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#github">
          <img
            src="https://avatars3.githubusercontent.com/u/4959183?s=460&u=9fe07d561d32ac3258f44b7f403dbe0924c7de84&v=4"
            alt="Avatar"
          />
          <div>
            <strong>fabioods/graphql-server</strong>
            <p>Exemplo de estrutura com GraphQL Server utilizando MongoDB</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#github">
          <img
            src="https://avatars3.githubusercontent.com/u/4959183?s=460&u=9fe07d561d32ac3258f44b7f403dbe0924c7de84&v=4"
            alt="Avatar"
          />
          <div>
            <strong>fabioods/graphql-server</strong>
            <p>Exemplo de estrutura com GraphQL Server utilizando MongoDB</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#github">
          <img
            src="https://avatars3.githubusercontent.com/u/4959183?s=460&u=9fe07d561d32ac3258f44b7f403dbe0924c7de84&v=4"
            alt="Avatar"
          />
          <div>
            <strong>fabioods/graphql-server</strong>
            <p>Exemplo de estrutura com GraphQL Server utilizando MongoDB</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#github">
          <img
            src="https://avatars3.githubusercontent.com/u/4959183?s=460&u=9fe07d561d32ac3258f44b7f403dbe0924c7de84&v=4"
            alt="Avatar"
          />
          <div>
            <strong>fabioods/graphql-server</strong>
            <p>Exemplo de estrutura com GraphQL Server utilizando MongoDB</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#github">
          <img
            src="https://avatars3.githubusercontent.com/u/4959183?s=460&u=9fe07d561d32ac3258f44b7f403dbe0924c7de84&v=4"
            alt="Avatar"
          />
          <div>
            <strong>fabioods/graphql-server</strong>
            <p>Exemplo de estrutura com GraphQL Server utilizando MongoDB</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#github">
          <img
            src="https://avatars3.githubusercontent.com/u/4959183?s=460&u=9fe07d561d32ac3258f44b7f403dbe0924c7de84&v=4"
            alt="Avatar"
          />
          <div>
            <strong>fabioods/graphql-server</strong>
            <p>Exemplo de estrutura com GraphQL Server utilizando MongoDB</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="#github">
          <img
            src="https://avatars3.githubusercontent.com/u/4959183?s=460&u=9fe07d561d32ac3258f44b7f403dbe0924c7de84&v=4"
            alt="Avatar"
          />
          <div>
            <strong>fabioods/graphql-server</strong>
            <p>Exemplo de estrutura com GraphQL Server utilizando MongoDB</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
