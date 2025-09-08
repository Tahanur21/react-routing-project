import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users = useLoaderData()
    // const {name} = users
    return (
        <div>
            <h1>Our users : {users.length}</h1>
            <p>Lets Play with routers</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    users.map(user => 
                        <User user={user} key={user.id}/>

                    )
                }
            </div>
        </div>
    );
};

export default Users;