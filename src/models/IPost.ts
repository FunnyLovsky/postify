export interface IPost {
    title: string
    body: string,
    img: string,
    id: string,
    like: number,
    dislike: number,
    reaction: TReact
}


export interface IReaction {
    id: string,
    like?: number,
    dislike?: number,
    reaction?: TReact
}

export type TReact = 'like' | 'dislike' | null