import React from 'react';
import { UserContext } from '../contexts/UserContext';


function BerandaPage(){
    //menaruh context untuk mendapatkan data user (apakah ada user yg sedang login atau tidak)
    const userContext = React.useContext(UserContext);


    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    //state untuk menyimpan data yang diinput
    const [posts, setPosts] = React.useState([]);

    //membuat funtion button post
    const addPost = () => {
        // console.log('>>', title, content);
        if (title.length > 0 && content.length > 0){
            //menampilkan data user yang diperoleh melalui context
            const username = userContext.currentUser.username;

            const newPost = {
                title, 
                content, 
                username, 
                createdAt: new Date().toString(),
            };

            //sprate data
            setPosts([...posts, newPost]);
            setTitle('');
            setContent('');

        }

    }
    return (
        <div className='HomePage-container'>
            <h1>Welcome, User</h1>
            <div>Beranda Page Content</div>
            <div>
                <div className="HomePage-form-container">
                    <div className="HomePage-form-section">
                        <input 
                            className="HomePage-input-title" 
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea 
                            className="HomePage-input-title" 
                            placeholder="Title"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />   
                    </div>
                    <div>
                        <button 
                        className="HomePage-submit" onClick={addPost}>
                            Post
                        </button>
                    </div>
                </div>
                {/* menampilkan data */}
                <ul className="post-list-container'">
                {posts.map(value => {
                    return (
                        <li className="post-item">
                            <p className="post-item head">{value.username}- {value.createdAt}</p>
                            <p className="post-item title">{value.title}</p>
                            <p className="post-item content">{value.content}</p>
                        </li>

                    );

                })}
                </ul>
            </div>
        </div>
    );
}

export default BerandaPage;
