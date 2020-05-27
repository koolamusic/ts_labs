/**
 * All the interfaces for the app
 */



export interface IEpisodes {
    airdate: string,
    airstamp: Date,
    airtime: number,
    id: number,
    image: Object,
    name: string,
    number: number,
    runtime: number,
    season: number,
    summary: string,
    url: URL
}

export interface IState {
    episodes: Array<IEpisodes>,
    favourites: Array<IEpisodes>
}
export interface IAction {
    type: string,
    payload: any,
}