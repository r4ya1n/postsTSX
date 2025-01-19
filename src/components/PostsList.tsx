import { Dispatch, FC, SetStateAction } from 'react'
import { PostItem } from './postItem'
import { Post } from '../project'

interface IPostsListProps {
	posts: Post[]
	renderPosts: Post[]
	setPosts: Dispatch<SetStateAction<Post[]>>
}

export const PostsList: FC<IPostsListProps> = ({
	setPosts,
	posts,
	renderPosts,
}) => {
	if (posts.length === 0) {
		return <>Посты не найдены</>
	}
	return (
		<div className='postsList'>
			{renderPosts.map(post => {
				return <PostItem setPosts={setPosts} key={post.id} renderPost={post} />
			})}
		</div>
	)
}
