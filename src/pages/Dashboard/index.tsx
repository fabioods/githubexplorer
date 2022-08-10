import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Title, Form, Repositories, Error } from './styles';
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
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepo = localStorage.getItem('@githubExplorer.repositories');

    if (storageRepo) {
      const repos = JSON.parse(storageRepo) as Repository[];
      return repos;
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@githubExplorer.repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleAddRepository = async (evento: FormEvent) => {
    evento.preventDefault();

    if (!newRepo) {
      setInputError('Digite o nome do usuario/repositório');
      return;
    }

    try {
      const response = await service.get<Repository>(`/repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError('Erro ao buscar esse repositório!');
    }
  };

  return (
    <>
      <img src={logo} alt="Logotipo Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
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
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repo => (
          <Link key={repo.id} to={`/repository/${repo.full_name}`}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
