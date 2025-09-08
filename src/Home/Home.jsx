import { Link, Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div className="space-y-3 mt-12">
            <h1 className="text-6xl">This is home page</h1>
            
            <div className="flex items-center justify-center gap-4">
                <Link to="/about" className="btn">About</Link>
                <Link to="/contact" className="btn">Contact</Link>
                <Link to="/users" className="btn">Users</Link>
                <Link to="/posts" className="btn">Posts</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default Home;