export interface IPost {
    title: string
    body: string
    img: string
    id: number
    like: number
    dislike: number
    reaction: TReact
}

export interface IReaction {
    id: number
    like?: number
    dislike?: number
    reaction?: TReact
    type?: 'like' | 'dislike'
}

export type TReact = 'like' | 'dislike' | null
