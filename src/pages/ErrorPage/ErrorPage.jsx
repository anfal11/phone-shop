import { Link} from "react-router-dom";

const ErrorPage = () => {
    const clickMe = () => {
        window.history.back();
    }
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-10">
        <div>

            <p className="text-5xl font-extrabold italic">Error, route not found.</p>
        </div>

        <div>
        <Link>
            <button onClick={clickMe} className="bg-red-500 p-5 hover:bg-red-800 hover:text-white rounded-md text-2xl font-bold"> Go Back</button>
        </Link>
        </div>    
           
            
        </div>
    );
};

export default ErrorPage;