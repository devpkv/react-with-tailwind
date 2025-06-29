import { useLocation } from "react-router-dom";

function UseLocationExample() { 

    const location = useLocation(); 
  return (
    <div> 
      <div className="bg-gray-100 px-4 py-2 rounded-lg shadow-md mb-2">
        <p>Home: {location.pathname}</p> 
      </div>
    </div>
  );
}

export default UseLocationExample;