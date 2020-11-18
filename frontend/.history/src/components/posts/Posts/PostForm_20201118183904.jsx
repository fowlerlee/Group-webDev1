//react core
import React, { useState, useRef, useEffect } from 'react';

//styles
import '../../../CSS/styles.css';

import API from '../../../api/PostsApi.js';

export default function PostForm({ onSubmit }) {
  const [body, setBody] = useState('');
  const userPost = useRef();

const createPost = () => {
  const post = {body};
  API.createPost(post)
  .then(()=>alert("done added"))

}

  return (
    <article className="content">
      <h1>POST AREA</h1>
      <p>
        <div>
          <textarea value = {} ref={userPost} 
          placeholder="enter a post" 
          onChange {e => setBody(e.target.value)}/>
          <hr />
          <button
            className="button"
            onClick={createPost}
           
          >
            Post Button
          </button>
          <label>{post}</label>
        </div>
      </p>
    </article>
  );
}