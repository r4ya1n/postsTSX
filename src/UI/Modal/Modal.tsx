import { FC, ReactNode } from 'react'
import styles from './ModalStyles.module.css'
import { PrButton } from '../prButton/PrButton'
interface IModalProps {
	children: ReactNode
	isVisible: boolean
	setIsVisible: (isVisible: boolean) => void
}

export const Modal: FC<IModalProps> = ({
	children,
	isVisible,
	setIsVisible,
}) => {
	const rootClasses = [styles.modalWrapper]
	if (isVisible) {
		document.body.style.overflow = 'hidden'
		rootClasses.push(styles.active)
	} else {
		document.body.style.overflow = 'scroll'
	}
	return (
		<div
			className={rootClasses.join(' ')}
			onClick={() => {
				setIsVisible(false)
			}}
		>
			<div className={styles.modal} onClick={event => event.stopPropagation()}>
				<PrButton
					className={styles.closeBtn}
					onClick={() => setIsVisible(false)}
				>
					×
				</PrButton>
				{children}
			</div>
		</div>
	)
}
