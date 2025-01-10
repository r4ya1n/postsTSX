import { FC, useState } from 'react'
import styles from './PostBlockStyles.module.css'
import { PostAction } from './PostAction.tsx'
import { PostItem } from './postItem.tsx'
import type { Post } from '../project'
import { SortedMethods } from '../ENums/SortedMethods.ts'

export const CommentsBlock: FC = () => {
	const [selectedSorting, setSelectedSorting] = useState<string>()
	const [posts, setPosts] = useState<Post[]>([
		{
			userId: 1,
			id: 1,
			title:
				'Аunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			body: 'Бuia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
		},
		{
			userId: 1,
			id: 2,
			title: 'Бui est esse',
			body: 'Аst rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
		},
	])
	const sortPosts = (selectedSorting: string) => {
		setSelectedSorting(selectedSorting)
		switch (selectedSorting) {
			case SortedMethods.byName:
				setPosts(prevPosts =>
					[...prevPosts].sort((a, b) => a.title.localeCompare(b.title))
				)
				break
			case SortedMethods.byContent:
				setPosts(prevPosts =>
					[...prevPosts].sort((a, b) => a.body.localeCompare(b.body))
				)
				break
			case SortedMethods.byTime:
				setPosts(prevPosts => [...prevPosts].sort((a, b) => a.id - b.id))
				break
		}
	}
	return (
		<div className={styles.block}>
			<h2 className={styles.header}>Посты</h2>
			<PostAction sortPosts={sortPosts} />
			<div className='postsList'>
				{posts.map(post => {
					return <PostItem key={post.id} post={post} />
				})}
			</div>
		</div>
	)
}
