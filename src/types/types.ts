export interface IChildren {
    children: React.ReactNode,
}

export interface ICard {
    title: string,
    poster: string,
    year: string,
    imdbID: string,
    hasIcon: boolean
}

export type ICardPage = Record<string, string>






export interface Input {
    placeholder: string,
}