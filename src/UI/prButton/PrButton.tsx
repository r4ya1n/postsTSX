import { FC, ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './PrButtonStyles.module.css'
import classNames from 'classnames'
interface IPrButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export const PrButton: FC<IPrButtonProps> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={classNames(styles.btn, className)} {...rest}>
			{children}
		</button>
	)
}
