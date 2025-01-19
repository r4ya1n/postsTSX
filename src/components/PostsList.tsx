import { Dispatch, FC, SetStateAction } from 'react'
import { PostItem } from './postItem'
import { Post } from '../project'

interface IPostsListProps {
	isLoading: boolean
	errorStatus: number
	posts: Post[]
	renderPosts: Post[]
	setPosts: Dispatch<SetStateAction<Post[]>>
}

export const PostsList: FC<IPostsListProps> = ({
	isLoading,
	errorStatus,
	setPosts,
	posts,
	renderPosts,
}) => {
	if (isLoading) {
		return <>Загрузка...</>
	}
	if (errorStatus !== 200) {
		return <>Ошибка {errorStatus}</>
	}

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
