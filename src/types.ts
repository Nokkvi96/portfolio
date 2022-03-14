export type gitHubProfile = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  location: string;
  bio: string;
  public_repos: string;
};

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
