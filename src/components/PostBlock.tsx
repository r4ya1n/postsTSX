import { FC, useEffect, useState } from 'react'
import styles from './PostBlockStyles.module.css'
import { PostAction } from './PostAction.tsx'
import type { Post, PostFilter } from '../project'
import { SortedMethods } from '../ENums/SortedMethods.ts'
import { PostsList } from './PostsList.tsx'
import { PostService } from '../API/PostService.ts'
import { usePosts } from '../hooks/usePosts.ts'
import { Modal } from '../UI/Modal/Modal.tsx'

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

	function deletePost(id: number) {
		setPosts(prevPosts => prevPosts.filter(post => post.id !== id))
	}

	useEffect(() => {
		fetchPosts()
		return () => {}
	}, [])

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
	return (
		<div className={styles.block}>
			<Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
				Рататуй
			</Modal>
			<h2 className={styles.header}>Посты</h2>
			<PostAction
				setIsModalVisible={setIsModalVisible}
				filter={filter}
				setFilter={setFilter}
			/>
			{isPostsLoading ? (
				<>Идет загрузка...</>
			) : (
				<PostsList deletePost={deletePost} posts={renderPosts} />
			)}
		</div>
	)
}
