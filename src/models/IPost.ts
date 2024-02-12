export interface IPost {
    title: string
    body: string,
    img: string,
    id: string,
    like: number,
    dislike: number,
    reaction: 'like' | 'dislike' | null
}
