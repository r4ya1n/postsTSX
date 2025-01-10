import { InputHTMLAttributes, FC } from 'react'

export const PrInput: FC<InputHTMLAttributes<HTMLInputElement>> = props => {
	return <input {...props} type='text' />
}
