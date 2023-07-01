 export interface IPopularStore {
    selectedLanguage: string;
    loading: boolean;
    repos: [] | IRepos[];
    error: null | string;
}

export interface IRepos {
    [key: string]: any;
}
export interface IProfile {
   [key: string]: number;
}

export type ReposT = [] | IRepos[];
export type ErrorT = string | number;