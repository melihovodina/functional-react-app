import React, {useState} from 'react'
import MyBtn from "./UI/button/MyBtn";
import MyInput from "./UI/input/MyInput";
const PostForm = ({create}) => {
  //Переменная поста
  const [post, setPost] = useState({title: '', body: ''})
  //Функция создания поста
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }
  return (
    <form onSubmit={addNewPost}>
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Post's name"
        />
        <MyInput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="Description"
        />
        <MyBtn type="submit">Create</MyBtn>
      </form>
  )
}

export default PostForm