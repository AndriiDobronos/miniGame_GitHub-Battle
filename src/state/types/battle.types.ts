export interface IBattleStore {
    playerData: {
        playerOneName: string,
        playerTwoName: string,
        playerOneImage: string | null,
        playerTwoImage: string | null
    },
    userName: string,
    userName1: string,
    userName2: string,
    loading: boolean,
    error: string | null,
    winner: string | null,
    loser: string | null,
}

export interface IPlayerData {
    playerOneName: string ,
    playerTwoName: string ,
    playerOneImage: string| null,
    playerTwoImage: string | null
}

export interface IRepos {
    [key: string]: any;
}

export type ErrorT = string | number;

