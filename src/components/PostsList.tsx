import { FC } from 'react'
import { PostItem } from './postItem'
import { Post } from '../project'

interface IPostsListProps {
	posts: Post[]
	deletePost: (id: number) => void
}

export const PostsList: FC<IPostsListProps> = ({ posts, deletePost }) => {
	if (posts.length === 0) {
		return <>Посты не найдены</>
	}
	return (
		<div className='postsList'>
			{posts.map(post => {
				return <PostItem deletePost={deletePost} key={post.id} post={post} />
			})}
		</div>
	)
}
