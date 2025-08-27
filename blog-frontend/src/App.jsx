import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get("http://localhost:3000/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  };

  const createPost = () => {
    axios.post("http://localhost:3000/posts", { post: { title, content } })
      .then(() => {
        setTitle("");
        setContent("");
        fetchPosts();
      });
  };

  return (
    <div>
      <h1>Meu Blog</h1>
      <input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Conteúdo" value={content} onChange={e => setContent(e.target.value)}></textarea>
      <button onClick={createPost}>Criar Post</button>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
