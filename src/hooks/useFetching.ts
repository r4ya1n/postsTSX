import { useState } from 'react'
type ApiError = {
	status: number
	message: string
}
type useFetchingReturn = [
	fetching: () => Promise<void>,
	isLoading: boolean,
	errorStatus: number
]

export const useFetching = (
	callback: () => Promise<void>
): useFetchingReturn => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [errorStatus, setErrorStatus] = useState<number>(200)

	const fetching = async () => {
		try {
			setIsLoading(true)
			await callback()
			setIsLoading(false)
		} catch (e) {
			const serverError = e as ApiError
			setErrorStatus(serverError.status)
		} finally {
			setIsLoading(false)
		}
	}
	return [fetching, isLoading, errorStatus]
}
