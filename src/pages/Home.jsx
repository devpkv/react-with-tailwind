import { useNavigate } from "react-router-dom";

function Home()
{

    const navigation = useNavigate();

    const handleLogin = () => {
        // Navigate to the login page when the button is clicked
        navigation('/dashboard');
    };

    return(
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page of our application.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, praesentium?</p>
            <button className="bg-gray-800 p-2 text-white rounded-md" onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Home;
// This component serves as the home page of the application, providing a welcome message and a brief