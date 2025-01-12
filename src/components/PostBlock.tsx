import { FC, useEffect, useState } from 'react'
import styles from './PostBlockStyles.module.css'
import { PostAction } from './PostAction.tsx'
import type { Post } from '../project'
import { SortedMethods } from '../ENums/SortedMethods.ts'
import { PostService } from '../API/PostService.ts'
import { PostsList } from './PostsList.tsx'

export const CommentsBlock: FC = () => {
	const [selectedSorting, setSelectedSorting] = useState<string>(
		SortedMethods.byName
	)
	const [isPostsLoading, setIsPostsLoading] = useState<boolean>(true)
	const [posts, setPosts] = useState<Post[]>()

	useEffect(
		() => {
			fetchPosts()
			return () => {}
		},
		//eslint-disable-next-line
		[]
	)
	async function fetchPosts() {
		setIsPostsLoading(true)
		const response = await PostService.getAll()
		setPosts(response.data)
		setIsPostsLoading(false)
	}
	const sortPosts = (selectedSorting: string) => {
		console.log('sortPosts')

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
			<button onClick={fetchPosts}>GET POSTS</button>
			<h2 className={styles.header}>Посты</h2>
			<PostAction sortPosts={sortPosts} />
			{isPostsLoading ? <>Идет загрузка...</> : <PostsList posts={posts} />}
		</div>
	)
}
