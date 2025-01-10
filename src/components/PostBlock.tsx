import { FC, useState } from 'react'
import styles from './PostBlockStyles.module.css'
import { PostAction } from './PostAction.tsx'
import { PostItem } from './postItem.tsx'
import type { Post } from '../project'

export const CommentsBlock: FC = () => {
	const [posts, setPosts] = useState<Post[]>([
		{
			userId: 1,
			id: 1,
			title:
				'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
		},
		{
			userId: 1,
			id: 2,
			title: 'qui est esse',
			body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
		},
	])
	return (
		<div className={styles.block}>
			<h2 className={styles.header}>Посты</h2>
			<PostAction />
			<div className='postsList'>
				{posts.map(post => {
					return <PostItem key={post.id} post={post} />
				})}
			</div>
		</div>
	)
}
