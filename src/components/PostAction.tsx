import { FC } from 'react'
import { SortedMethods } from '../ENums/SortedMethods'
import styles from './PostActionStyles.module.css'
import { PrButton } from '../UI/prButton/PrButton'
import { PostFilter } from '../project'

interface IPostActionProps {
	filter: PostFilter
	setFilter: (newFilter: PostFilter) => void
}

export const PostAction: FC<IPostActionProps> = ({ filter, setFilter }) => {
	return (
		<div className={styles.actions}>
			<input
				placeholder='Поиск...'
				value={filter.query}
				onChange={event => {
					setFilter({ ...filter, query: event.target.value })
				}}
			/>
			<div className={styles.sortAndBtn}>
				<select
					value={filter.selectSortingMethod}
					onChange={event => {
						setFilter({ ...filter, selectSortingMethod: event.target.value })
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
