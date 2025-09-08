import { useLoaderData } from "react-router-dom";
import Post from "./Post";


const Posts = () => {
    const posts = useLoaderData()
    console.log(posts)
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                posts.map(post => 
                    <Post post={post} key={post.id}/>
                )
            }
        </div>
    );
};

export default Posts;