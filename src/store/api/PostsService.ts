import { handleNetworkError } from '@/utils/handleNetworkError'
import { URL_API } from './conts'

export class PostsService {
    static async fetch(url: string) {
        try {
            const response = await fetch(url)
            if (response.ok) {
                return await response.json()
            }
            throw new Error(`${response.status}`)
        } catch (error) {
            handleNetworkError(error.message)
        }
    }

    static async fetchPosts() {
        return this.fetch(URL_API)
    }

    static async fetchDetailPost(id: number) {
        return this.fetch(`${URL_API}?id=${id}`)
    }

    static async seacrhPosts(title: string) {
        return this.fetch(`${URL_API}?title=${title}`)
    }
}
