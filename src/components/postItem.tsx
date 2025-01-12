import { FC } from 'react'
import type { Post } from '../project'
import styles from './postItemStyles.module.css'
import { PrButton } from '../UI/prButton/PrButton'
interface IPostItemProps {
	post: Post
	deletePost: (id: number) => void
}

export const PostItem: FC<IPostItemProps> = ({ post, deletePost }) => {
	const firstCapital = (text: string): string => {
		return text[0].toUpperCase() + text.slice(1)
	}
	return (
		<article className={styles.postBlock}>
			<PrButton
				onClick={() => {
					deletePost(post.id)
				}}
				className={styles.closeButton}
			>
				×
			</PrButton>
			<h3 className={styles.header}>{firstCapital(post.title)}</h3>
			<p className={styles.body}>{post.body}</p>
			<footer className={styles.author}>@{post.userId}</footer>
		</article>
	)
}
