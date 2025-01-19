import { Dispatch, FC, SetStateAction, useState } from 'react'
import { PrButton } from '../UI/prButton/PrButton'
import styles from './PostForm.module.css'
import { Post } from '../project'

interface IPostForm {
	setPosts: (posts: Post[]) => void
	setIsModalVisible: (isModalVisible: boolean) => void
}

export const PostForm: FC<IPostForm> = ({ setPosts, setIsModalVisible }) => {
	const [formContent, setFormContent] = useState<Post>({
		id: Date.now(),
		title: '',
		body: '',
		userId: Date.now() + 1,
	})
	return (
		<form className={styles.postForm}>
			<input
				value={formContent.title}
				onChange={event => {
					event.preventDefault()
					setFormContent({ ...formContent, title: event.currentTarget.value })
				}}
				className={styles.postInput}
				placeholder='Напишите название...'
				type='text'
			/>

			<textarea
				value={formContent.body}
				onChange={event => {
					event.preventDefault()
					setFormContent({ ...formContent, body: event.currentTarget.value })
				}}
				placeholder='Напишите содержание...'
				className={styles.postTextArea}
			></textarea>
			<div className={styles.postButtons}>
				<PrButton
					onClick={event => {
						event.preventDefault()
						setFormContent({ ...formContent, title: '', body: '' })
					}}
					className={styles.resetBtn}
				>
					Сбросить
				</PrButton>
				<PrButton
					onClick={event => {
						event.preventDefault()
						if (formContent.title !== '' && formContent.body !== '') {
							setPosts((posts: Post[]) => [...posts, formContent])
							setFormContent({ ...formContent, title: '', body: '' })
							setIsModalVisible(false)
						} else {
							console.log('Иди нахуй')
						}
					}}
				>
					Добавить
				</PrButton>
			</div>
		</form>
	)
}
