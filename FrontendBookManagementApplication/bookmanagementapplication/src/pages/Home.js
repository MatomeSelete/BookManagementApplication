import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  // GET with fetch API
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=10'
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };
    fetchPost();
  }, []);

  // GET with id
  const handleViewClick = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    setSelectedPost(data);
  };

  // Delete with fetchAPI
  const deletePost = async (id) => {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: 'DELETE',
      }
    );
    if (response.status === 200) {
      setPosts(
        posts.filter((post) => {
          return post.id !== id;
        })
      );
    } else {
      return;
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };


  return (
    <div className='container home'
      style={
        {
          width: "100%",
          height: "auto",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "1%"
        }
      }

    >

      {posts.map((item) => (
        <div className="card" key={item.id} style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-title">{item.title}</h6>
            <p className="card-text">{item.body}</p>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#postModal"
              onClick={() => handleViewClick(item.id)}>
              View
            </button>
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => deletePost(item.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}


      <div class="modal fade" id="postModal" aria-hidden="true" aria-labelledby="postModalLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="postModal">{selectedPost?.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {selectedPost && (
              <>
                <h6>{selectedPost.title}</h6>
                <p>{selectedPost.body}</p>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Save</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}