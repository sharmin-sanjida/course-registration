
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog"
import PropTypes from 'prop-types';



const Blogs = ({handleAddToCart,handleRunCredit}) => {
    const [blogs, setBlogs] = useState([]);


useEffect(() =>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
}, [])

return (
    <div className=" flex flex-row gap-6 ">
        <h1 className="text-4xl justify-between"></h1>



{
    blogs.map(blog => <Blog key={blog.id} blog={blog}
        handleAddToCart={handleAddToCart}
        handleRunCredit={handleRunCredit}></Blog>)
 }

    </div>
);

};


Blogs.propTypes = {
    handleAddToCart: PropTypes.func,
    handleRunCredit: PropTypes.func
  };




export default Blogs;






 


