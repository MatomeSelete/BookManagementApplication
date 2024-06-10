import React, { useState, useEffect } from 'react';

export default function AddBook() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    // Post with fetchAPI
    const addPosts = async (title, body) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: Math.random().toString(36).slice(2),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        let data = await response.json();
        setPosts((posts) => [data, ...posts]);
        setTitle('');
        setBody('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(title, body);
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div class="card">
                    <div>
                        <label>Book title</label>
                        <h5 class="card-title">
                            <input type="text" placeholder=' look at Leo' className="form-control" value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </h5>
                    </div>

                    {/* <div>
                        <label>Book author</label>
                        <h5 class="card-title">
                            <input type="text"  placeholder='Leo Boot'  className="form-control" value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </h5>
                    </div> */}

                    <div>
                        <label>Book descriptio</label>
                        <p class="card-text">
                            <textarea name=""  placeholder='Life About Leo'  className="form-control" id="" cols="10" rows="8"
                                value={body} onChange={(e) => setBody(e.target.value)}
                            ></textarea>
                        </p>
                    </div>
                    <a type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save</a>

                </div>
            </form>
        </div>
    )
}
