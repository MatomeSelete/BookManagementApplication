import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function AddBook() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);


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
        console.log(title + body)
        addPosts(title, body);
    };

    return (

        <div className='container'>
        <form onSubmit={handleSubmit}>
            <div className="card">
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Book Title</label>
                        <input type="text" id="title" placeholder='Look at Leo' className="form-control" value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {/* <div className="mb-3">
                        <label htmlFor="author" className="form-label">Book Author</label>
                        <input type="text" id="author" placeholder='Leo Boot' className="form-control" value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div> */}

                    <div className="mb-3">
                        <label htmlFor="body" className="form-label">Book Description</label>
                        <textarea id="body" placeholder='Life About Leo' className="form-control" cols="10" rows="8"
                            value={body} onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    </div>


        // <div className='container'>
        //     <form onSubmit={handleSubmit}>
        //         <div class="card">
        //             <div>
        //                 <label>Book title</label>
        //                 <h5 class="card-title">
        //                     <input type="text" placeholder=' look at Leo' className="form-control" value={title}
        //                         onChange={(e) => setTitle(e.target.value)}
        //                     />
        //                 </h5>
        //             </div>

                    //  <div>
                    //     <label>Book author</label>
                    //     <h5 class="card-title">
                    //         <input type="text"  placeholder='Leo Boot'  className="form-control" value={title}
                    //             onChange={(e) => setTitle(e.target.value)}
                    //         />
                    //     </h5>
                    // </div> 

                    // <div>
        //                 <label>Book descriptio</label>
        //                 <p class="card-text">
        //                     <textarea name=""  placeholder='Life About Leo'  className="form-control" id="" cols="10" rows="8"
        //                         value={body} onChange={(e) => setBody(e.target.value)}
        //                     ></textarea>
        //                 </p>
        //             </div>
        //             <a type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save</a>
        //         </div>
        //     </form>
        // </div>

        
    )
}
