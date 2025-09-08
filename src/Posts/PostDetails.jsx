import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
const post = useLoaderData();
const {title,body,id} = post;
const navigate = useNavigate();
const handleGoBack = () =>{
    navigate(`/posts`); // same things happened
    // navigate(-1);
}
    return (
        <div className="border w-80 mx-auto p-5 rounded-2xl space-y-4">
           <h1 className="text-2xl font-semibold">{title}</h1>
           <p>{body}</p>
           <p>{id}</p>
           <p>{title}</p>
           <button onClick={handleGoBack} className="btn">Go Back</button>
        </div>
    );
};

export default PostDetails;