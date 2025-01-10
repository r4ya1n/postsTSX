import { FC, ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './PrButtonStyles.module.css'
interface IPrButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export const PrButton: FC<IPrButtonProps> = ({ children, ...rest }) => {
	return (
		<button className={styles.btn} {...rest}>
			{children}
		</button>
	)
}
