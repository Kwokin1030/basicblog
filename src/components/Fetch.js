import { useState, useEffect } from 'react';

const Fetch = () => {
  const [blogs, setBlogs] = useState([]);
  const [counts, setCounts] = useState(5);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      })
  }, [counts]);

  function clicked() {
      setCounts(counts => counts + 5)
  }

  // blogs.splice(counts, 100 - counts);
  let temp = [];
  temp = [...blogs];
  temp.splice(counts, 100-counts);

  return (
    <>
      <h1>{counts}</h1>
      <button className='btn pulse' onClick={clicked}>Show More</button>
      <div className="content">
        {/* {
          blogs.map((blog) => (
            <p key={blog.id}><b>{blog.title}</b> <br /><br />{blog.body}<br /><br />USERID: {blog.userId}</p>
          ))
        } */}
        {
          temp.map((blog) => (
            <p key={blog.id}><b>{blog.title}</b> <br /><br />{blog.body}<br /><br />USERID: {blog.userId}</p>
          ))
        }
      </div>
    </>
  )
}
export default Fetch;