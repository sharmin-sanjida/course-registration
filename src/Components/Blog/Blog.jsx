
import PropTypes from 'prop-types'; 
import { FaBookOpen } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";

const Blog = ({ blog, handleAddToCart, handleRunCredit}) => {
     const {title, cover, description, price, Credit} = blog;
    
    return (
        
        <div className=" pt-2 flex-row mb-8 w-80 pl-4 pb-4 h-100 rounded-md gap-8 bg-slate-200 border-x-0 rounded-xl">
            <div className=" mb-2 text-center text-2xl pt-2 text-black">{title}</div>
            <img className='' src={cover} alt={` ${title}`} />
           <div className='Parent'></div>
           <div className=" ml-2 mr-4 mt-2 flex w-60 text-black">{description}</div>
                  
           <div className="mt-4 flex gap-16"><h3 className="flex "><FaDollarSign className="ml-4"></FaDollarSign>Price:{price}</h3><span className="flex text-slate-600"><FaBookOpen className="mr-2"></FaBookOpen>
           
           <button 
           onClick={ () => handleRunCredit(Credit)}
           className='text-blue-900 font-bold'>Credit:</button>{Credit}</span>
           
           </div>
           <div> <button onClick={() => handleAddToCart(blog)} className=" mt-4 h-10 w-48  bg-blue-500 rounded-lg items-center text-white text-lg font-semibold font-['Inter']"><h2>Select</h2></button></div>
        </div>

        
        
        );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func,
    handleRunCredit: PropTypes.func
}




export default Blog;







