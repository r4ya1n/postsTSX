import { FC } from 'react'
import { SortedMethods } from '../ENums/SortedMehots'
import styles from './PostActionStyles.module.css'
import { PrButton } from '../UI/prButton/PrButton'

interface IPostActionProps {}

export const PostAction: FC<IPostActionProps> = props => {
	return (
		<div className={styles.actions}>
			<input placeholder='Поиск...' />
			<div className={styles.sortAndBtn}>
				<select name='' id=''>
					<option value={SortedMethods.byName}>По названию</option>
					<option value={SortedMethods.byContent}>По контенту</option>
					<option value={SortedMethods.byTime}>По времени</option>
				</select>
				<PrButton>+</PrButton>
			</div>
		</div>
	)
}
