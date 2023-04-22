import { api } from "@lib/axios";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";

interface User {
  login: string;
  name: string;
  bio: string;
  company: string;
  followers: number;
  avatar_url: string;
  html_url: string;
}

export interface Issue {
  id: number;
  title: string;
  body?: string;
  url: string;
  number: number;
  comments: number;
  comments_url: string;
  user: User;
  created_at: string;
}

export interface GithubContextType {
  issues: Issue[];
  user: User;

  searchIssues(query?: string): Promise<void>;
  getIssueById(id: number): Promise<Issue>;
}

interface GithubProviderProps {
  children: ReactNode;
}

export const GithubContext = createContext({} as GithubContextType);

export function GithubProvider({ children }: GithubProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [user, setUser] = useState<User>({} as User);

  const getUserInfo = useCallback(async () => {
    const response = await api.get("/users/neovim");

    setUser(response.data);
  }, []);

  const searchIssues = useCallback(async (query?: string) => {
    const response = await api.get(
      `/search/issues?q=${query} repo:neovim/neovim is:issue is:open`
    );

    setIssues(response.data.items);
  }, []);

  const getIssueById = useCallback(async (id: number) => {
    const response = await api.get<Issue>(`/repos/neovim/neovim/issues/${id}`);

    return response.data;
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  const value = useMemo(
    () => ({
      issues,
      searchIssues,
      getIssueById,
      user,
    }),
    [issues, user, searchIssues, getIssueById]
  );

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
}
