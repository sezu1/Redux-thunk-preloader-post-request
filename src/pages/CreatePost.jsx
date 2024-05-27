import React, {useState} from 'react';
import {getPostsActionCreators} from "../store/actionCreators/postsActionCreator";
import {useDispatch, useSelector} from "react-redux";




function CreatePost() {
    const dispatch = useDispatch();
    const [valueTitle, setTitle] = useState('');
    const [valueBody, setBody] = useState('');

    const {posts} = useSelector((store) => store.postsR);
    const {loading} = useSelector((store) => store.postsR);

    function titleValue(e) {
        setTitle(e.target.value)
    }

    function bodyValue(e) {
        setBody(e.target.value)
    }


   function submit(e){
       e.preventDefault();
       const postData = {title: valueTitle, body: valueBody}
       dispatch(getPostsActionCreators(postData))
       setTitle('')
       setBody('')
   }



    return (
        <div>
            <h2>Posts</h2>
            <form onSubmit={submit}>
                <input type="text"
                       placeholder='title'
                       value={valueTitle}
                       onChange={titleValue}/>
                <textarea
                    placeholder='body'
                    value={valueBody}
                    onChange={bodyValue}/>
                <button>create</button>
            </form>
            {loading ? (
                <div> loading ... </div>
                ) : (
                <ul>
                    {posts && posts.length > 0 ? (
                            posts.map((post) => (
                                <li key={post.id}>
                                    <div>{post.body}</div>
                                    <div>{post.title}</div>
                                </li>
                            ))
                        )
                        : <div>no posts</div>
                      }
                </ul>

            )}
        </div>
    );
}

export default CreatePost;