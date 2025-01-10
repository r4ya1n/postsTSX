import { FC, useState } from 'react'
import { SortedMethods } from '../ENums/SortedMethods'
import styles from './PostActionStyles.module.css'
import { PrButton } from '../UI/prButton/PrButton'

interface IPostActionProps {
	sortPosts: (selectedSorting: string) => void
}

export const PostAction: FC<IPostActionProps> = ({ sortPosts }) => {
	const [selectedSorting, setSelectedSorting] = useState<string>()
	return (
		<div className={styles.actions}>
			<input placeholder='Поиск...' />
			<div className={styles.sortAndBtn}>
				<select
					value={selectedSorting}
					onChange={event => {
						const newValue = event.target.value
						setSelectedSorting(newValue)
						sortPosts(newValue)
					}}
				>
					<option value={SortedMethods.byName}>По названию</option>
					<option value={SortedMethods.byContent}>По контенту</option>
					<option value={SortedMethods.byTime}>По времени</option>
				</select>
				<PrButton>+</PrButton>
			</div>
		</div>
	)
}
