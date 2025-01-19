import { Dispatch, FC, SetStateAction } from 'react'
import type { Post } from '../project'
import styles from './postItemStyles.module.css'
import { PrButton } from '../UI/prButton/PrButton'
interface IPostItemProps {
	renderPost: Post
	setPosts: Dispatch<SetStateAction<Post[]>>
}

export const PostItem: FC<IPostItemProps> = ({ setPosts, renderPost }) => {
	const firstCapital = (text: string): string => {
		return text[0].toUpperCase() + text.slice(1)
	}
	return (
		<article className={styles.postBlock}>
			<PrButton
				onClick={event => {
					event.preventDefault()
					setPosts((prevPosts: Post[]) =>
						prevPosts.filter((post: Post) => post.id !== renderPost.id)
					)
				}}
				className={styles.closeButton}
			>
				×
			</PrButton>
			<h3 className={styles.header}>{firstCapital(renderPost.title)}</h3>
			<p className={styles.body}>{renderPost.body}</p>
			<footer className={styles.author}>@{renderPost.userId}</footer>
		</article>
	)
}
