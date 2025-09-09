import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(`/`);
    }
    const {status,statusText,message} = error
    return (
        <div className="space-y-8">
            <h1 className="text-6xl font-semibold">Opps!!</h1>
            <p>{statusText || message}</p>
            {
                status === 404 && <div className="space-y-4">
                    <h3>Page not found</h3>
                    <button onClick={handleGoBack} className="btn">Go Back</button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;