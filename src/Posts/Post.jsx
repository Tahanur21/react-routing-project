import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,body,title} = post
    const navigate = useNavigate();
    const handleShowDetails = () =>{
        navigate(`/post/${id}`);
    }
    return (
        <div className="flex flex-col justify-center items-center border rounded-2xl bg-green-400 text-gray-700 p-4 space-y-3">
            <h1 className="text-xl font-semibold flex-grow">{title}</h1>
            <p className="flex-grow">{body}</p>
            <Link className="btn bg-gray-700 border-0 text-green-400" to={`/post/${id}`}>Show More</Link>
            <button onClick={handleShowDetails} className="btn bg-gray-700 border-0 text-green-400">Click Details</button>
        </div>
    );
};

export default Post;