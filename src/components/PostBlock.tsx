import { FC, useEffect, useState } from 'react'
import styles from './PostBlockStyles.module.css'
import { PostAction } from './PostAction.tsx'
import type { Post, PostFilter } from '../project'
import { SortedMethods } from '../ENums/SortedMethods.ts'
import { PostsList } from './PostsList.tsx'
import { PostService } from '../API/PostService.ts'
import { usePosts } from '../hooks/usePosts.ts'
import { Modal } from '../UI/Modal/Modal.tsx'
import { PostForm } from './PostForm.tsx'
import { useFetching } from '../hooks/useFetching.ts'

export const CommentsBlock: FC = () => {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
	const [posts, setPosts] = useState<Post[]>([])
	const [filter, setFilter] = useState<PostFilter>({
		selectSortingMethod: SortedMethods.byName,
		query: '',
	})
	const renderPosts = usePosts(posts, filter)
	const [fetchPosts, isPostsLoading, errorStatus] = useFetching(async () => {
		const ServerPosts = await PostService.getAll()
		setPosts(ServerPosts)
	})

	useEffect(
		() => {
			fetchPosts()
			return () => {}
		},
		// eslint-disable-next-line
		[]
	)

	return (
		<div className={styles.block}>
			<Modal isVisible={isModalVisible} setIsVisible={setIsModalVisible}>
				<h3>Добавить пост</h3>
				<PostForm setPosts={setPosts} setIsModalVisible={setIsModalVisible} />
			</Modal>
			<h2 className={styles.header}>Посты</h2>
			<PostAction
				setIsModalVisible={setIsModalVisible}
				filter={filter}
				setFilter={setFilter}
			/>
			<PostsList
				isLoading={isPostsLoading}
				errorStatus={errorStatus}
				setPosts={setPosts}
				posts={posts}
				renderPosts={renderPosts}
			/>
		</div>
	)
}
