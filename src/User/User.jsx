import { Link } from "react-router-dom";
const User = ({user}) => {
    const {name,email,phone,id} = user;
    return (
        <div className="border rounded-2xl p-6 space-y-3">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <Link className="btn" to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;