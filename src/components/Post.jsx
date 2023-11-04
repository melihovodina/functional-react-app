import React from "react";
import MyBtn from "./UI/button/MyBtn";
import { useNavigate } from 'react-router-dom'
const Post = (props) => {
    const navigate = useNavigate();
    return(
        <div className="post">
            <div className="post_content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post_btns">
                <MyBtn style = {{margin: 5}} onClick = {() => navigate(`/posts/${props.post.id}`)}>
                    Open
                </MyBtn>
                <MyBtn style = {{margin: 5}} onClick = {() => props.remove(props.post)}>
                    Delete
                </MyBtn>
            </div>
        </div>
    )
}
export default Post;
