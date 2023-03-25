import { ICard } from "@/types/types"


export interface InputSlice {
    value: string,
    fetchValue: string,
    title: string,
    items: ICard[]
}

export interface IStaticProps {
    id: string
  }


export interface IFavourite {
    items: ICard[]
  }


