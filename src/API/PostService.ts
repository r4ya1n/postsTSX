import axios from 'axios'
import type { Post } from '../project.d.ts'

export class PostService {
	static async getAll(): Promise<Post[]> {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		)
		return response.data
	}
}
