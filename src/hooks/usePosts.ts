import { useMemo } from 'react'
import { SortedMethods } from '../ENums/SortedMethods'
import { Post, PostFilter } from '../project'

const useSortedPosts = (posts: Post[], sortedMethod: string) => {
	return useMemo(() => {
		switch (sortedMethod) {
			case SortedMethods.byName:
				return [...posts].sort((a, b) => a.title.localeCompare(b.title))
			case SortedMethods.byContent:
				return [...posts].sort((a, b) => a.body.localeCompare(b.body))
			case SortedMethods.byTime:
				return [...posts].sort((a, b) => a.id - b.id)
			default:
				return posts
		}
	}, [posts, sortedMethod])
}

export const usePosts = (posts: Post[], filter: PostFilter) => {
	const sortedPosts = useSortedPosts(posts, filter.selectSortingMethod)
	return useMemo(() => {
		return sortedPosts.filter(post =>
			post.title.toLowerCase().includes(filter.query.toLowerCase())
		)
	}, [sortedPosts, filter.query])
}
