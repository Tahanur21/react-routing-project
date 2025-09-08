import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const users = useLoaderData();
    const {name,phone,email,username,id} = users
    return (
        <div className=" border border-gray-600 rounded-2xl bg-green-400 text-gray-700 space-y-3 p-3">
            <h1 className="text-4xl font-semibold">{name}</h1>            
            <p>{email}</p>
            <p>{phone}</p>
            <p>{username}</p>
            <p>{id}</p>
        </div>
    );
};

export default UserDetails;