import { useMemo } from "react"
//Сортировка постов с помощью сравнивания
export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
    if(sort){
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])
  return sortedPosts
}

//Поиск поста по названию
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedSearchedPost = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts])
  return sortedSearchedPost
}