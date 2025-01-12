import { FC, useEffect, useState } from 'react'
import styles from './PostBlockStyles.module.css'
import { PostAction } from './PostAction.tsx'
import type { Post, PostFilter } from '../project'
import { SortedMethods } from '../ENums/SortedMethods.ts'
import { PostsList } from './PostsList.tsx'
import { PostService } from '../API/PostService.ts'
import { usePosts } from '../hooks/usePosts.ts'

export const CommentsBlock: FC = () => {
	const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false)
	const [posts, setPosts] = useState<Post[]>([])
	const [filter, setFilter] = useState<PostFilter>({
		selectSortingMethod: SortedMethods.byName,
		query: '',
	})
	const renderPosts = usePosts(posts, filter)

	async function fetchPosts() {
		setIsPostsLoading(true)
		const posts = await PostService.getAll()
		setPosts(posts)
		setIsPostsLoading(false)
	}

	useEffect(() => {
		fetchPosts()
		return () => {}
	}, [])

	return (
		<div className={styles.block}>
			<h2 className={styles.header}>Посты</h2>
			<PostAction filter={filter} setFilter={setFilter} />
			{isPostsLoading ? (
				<>Идет загрузка...</>
			) : (
				<PostsList posts={renderPosts} />
			)}
		</div>
	)
}
