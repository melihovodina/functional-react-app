import React, { useEffect, useState } from "react";
import '../styles/style.css';
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter"
import MyModal from "../components/UI/modal/MyModal";
import MyBtn from "../components/UI/button/MyBtn";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
function Posts() {
  //Массив постов
  const [posts, setPosts] = useState ([])
  //Переменная сортировки и поиска
  const [filter, setFilter] = useState({sort:'', query: ''})
  //Переменная, определяющая видимость окна создания поста
  const [modal, setModal] = useState(false);
  //Кол-во постов
  const [totalPages, setTotalPages] = useState(0);
  //Кол-во постов на странице
  const [limit, setLimit] = useState(10);
  //Номер страницы
  const [page, setPage] = useState(1);
  //Поиск и сортировка постов
  const sortedSearchedPost = usePosts(posts, filter.sort, filter.query)
  //Присваивание значений из инпута
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  //Полученные данные с сервера выводит на страницу
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page, )
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  //Загружает посты с сервера при запуске сайта
  useEffect(() => {
    fetchPosts()
  }, [page])
  //Удаление поста с помощью true false
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  return ( 
    <div className="App">
      {
      //Окно создания поста
      }
      <MyBtn style = {{marginTop: 30}} onClick={() => setModal(true)}>
        Create post
      </MyBtn>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create = {createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter} 
        setFilter={setFilter}
      />
      {postError &&
        <h1>Erorr ${postError}</h1>
      }
      {
      //Вывод
      }
      {isPostsLoading
        ?<div style = {{display: "flex", justifyContent: "center"}}>
          <Loader/>
        </div>
        :<PostList remove = {removePost} posts={sortedSearchedPost} title="Post's list"/>
      }
      <Pagination page={page} totalPages={totalPages} setPage={setPage}/>
    </div>  
  );
}
export default Posts