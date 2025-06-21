function Example() {
  return (
    <div className="flex items-center justify-center h-screen bg-dark-100 rounded-b-4xl">
      <div className="bg-fuchsia-500 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-white">Example Component</h2>
        <p className="text-gray-700t text-white  mb-4">
          This is an example component styled with Tailwind CSS.
        </p>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600">
          Click Me
        </button> 
      </div>
    </div>
  );
}

export default Example;