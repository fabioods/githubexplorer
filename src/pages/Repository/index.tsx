import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/Logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';
import api from '../../services/api';

interface RepositoryParams {
  repoFullName: string;
}

interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface Issue {
  id: number;
  title: string;
  user: {
    login: string;
  };
  html_url: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const { repoFullName } = params;
  const [repoInfo, setRepoInfo] = useState<Repository | null>(null);

  const [openIssues, setOpenIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get<Repository>(`/repos/${repoFullName}`).then(response => {
      setRepoInfo(response.data);
    });
    api.get<Issue[]>(`/repos/${repoFullName}/issues`).then(response => {
      setOpenIssues(response.data);
    });
  }, [repoFullName]);

  return (
    <>
      <Header>
        <img src={logo} alt="Logotipo Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repoInfo && (
        <RepositoryInfo>
          <header>
            <img src={repoInfo.owner.avatar_url} alt={repoInfo.full_name} />
            <div>
              <strong>{repoInfo.full_name}</strong>
              <p>{repoInfo.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repoInfo.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repoInfo.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repoInfo.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {openIssues &&
          openIssues.map(issue => (
            <a
              key={issue.id}
              href={issue.html_url}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>
              <FiChevronRight size={20} />
            </a>
          ))}
      </Issues>
    </>
  );
};

export default Repository;
