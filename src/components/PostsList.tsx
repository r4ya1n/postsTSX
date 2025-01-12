import { FC } from 'react'
import { PostItem } from './postItem'
import { Post } from '../project'
interface IPostsListProps {
	posts: Post[]
}

export const PostsList: FC<IPostsListProps> = ({ posts }) => {
	if (posts.length === 0) {
		return <>Посты не найдены</>
	}
	return (
		<div className='postsList'>
			{posts.map(post => {
				return <PostItem key={post.id} post={post} />
			})}
		</div>
	)
}
