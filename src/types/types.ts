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

export interface ICardPage {
    Poster: string,
    Director: string,
    Actors: string,
    Plot: string,
    imdbRating: string,
    imdbVotes: string,
    Type: string,
    Title: string,
    Year: string,
}





export interface Input {
    placeholder: string,
}