import { handleNetworkError } from "../../utils/handleNetworkError";
import { URL_API } from "./conts";


export class PostsService {
    static async fetchPosts() {
        try {
            const response = await fetch(`${URL_API}`);

            if (response.ok) {
                return await response.json()
            }

            throw new Error(`${response.status}`)
        } catch (error: any) {
            handleNetworkError(error.message);
        }
    }
}