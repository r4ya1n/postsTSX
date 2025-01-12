import { FC, useEffect, useState } from 'react'
import styles from './PostBlockStyles.module.css'
import { PostAction } from './PostAction.tsx'
import type { Post } from '../project'
import { SortedMethods } from '../ENums/SortedMethods.ts'
import { PostsList } from './PostsList.tsx'
import { PostService } from '../API/PostService.ts'

export const CommentsBlock: FC = () => {
	const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false)
	const [posts, setPosts] = useState<Post[]>([])

	useEffect(() => {
		fetchPosts()
		return () => {}
	}, [])

	async function fetchPosts() {
		setIsPostsLoading(true)
		const posts = await PostService.getAll()
		console.log(posts)
		setPosts(posts)
		setIsPostsLoading(false)
	}
	const sortPosts = (selectedSorting: string) => {
		console.log('sortPosts')

		// setSelectedSorting(selectedSorting)
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
			{isPostsLoading ? <>Идет загрузка...</> : <PostsList posts={posts} />}
		</div>
	)
}
