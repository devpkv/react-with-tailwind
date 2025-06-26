function Contact() {
  return (
    <div className="contact w-100 mx-auto border p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-md">
      <h1 className="font-bold text-2xl mb-4">Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <hr />
      <form className="max-w-sm mx-auto pt-5">
        <label htmlFor="name" className="block mb-2 text-sm font-medium">Name:</label>
        <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email:</label>
        <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

        <label htmlFor="message" className="block mb-2 text-sm font-medium">Message:</label>
        <textarea id="message" name="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>

        <button type="submit" className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">Send</button>
      </form>
    </div>
  );
}
export default Contact;