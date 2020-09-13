import React from 'react';

import { Title, Form } from './styles';
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
    </>
  );
};

export default Dashboard;
