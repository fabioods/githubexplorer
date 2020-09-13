import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logo from '../../assets/Logo.svg';
import service from '../../services/api';

interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleAddRepository = async (evento: FormEvent) => {
    try {
      evento.preventDefault();

      const response = await service.get<Repository>(newRepo);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
    } catch {}
  };

  return (
    <>
      <img src={logo} alt="Logotipo Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={evento => {
            setNewRepo(evento.target.value);
          }}
          type="text"
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        {repositories.map(repo => (
          <a key={repo.id} href="#teste">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
