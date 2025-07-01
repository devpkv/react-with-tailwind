import { useNavigate, useSearchParams } from "react-router-dom";

function Dashboard() {


    const navigation = useNavigate();

    const handleLogout = () => {
        // Navigate to the login page when the button is clicked
        navigation('/');
    };

    const [searchParam, setSearchParam] = useSearchParams("");
    console.log("Search Params:", searchParam);
    const topic = searchParam.get("topic") || "general";

    const urlParams = new URLSearchParams(window.location.search);
    console.log("URL Params:", urlParams);

    const handleSearchTopics = (newTopic) => {
        // Simulate a search operation
        setSearchParam({ topic: newTopic });
         
    };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg text-gray-700">Welcome to your dashboard!</p>
        <h4>Search Topics</h4>
     <div className="flex space-x-4 mt-4"> 
       <button className="bg-cyan-600 text-white p-2" onClick={() => handleSearchTopics("Apple")}>Apple</button>
        <button className="bg-cyan-600 text-white p-2" onClick={() => handleSearchTopics("Google")}>Google</button>
        <button className="bg-cyan-600 text-white p-2" onClick={() => handleSearchTopics("Microsoft")}>Microsoft</button>
        <button className="bg-cyan-600 text-white p-2" onClick={() => handleSearchTopics("Amazon")}>Amazon</button>
      
    </div>
     <p className="text-lg text-gray-700">Selected Topic: {topic}</p>
    <br />
    <button className="bg-gray-800 p-2 text-white rounded-md" onClick={handleLogout}>Logout</button>

    </div>
  );
}

export default Dashboard;