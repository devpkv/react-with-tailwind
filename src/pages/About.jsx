import { Outlet } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <p>This is the about page of our application.</p>
      <p>Here you can find information about the app and its features.</p>

      <div className="pt-4">
        <Outlet />
      </div>
      {/* This Outlet component allows nested routes to render their content here */}
      {/* For example, if there is a nested route for team information, it will be displayed here */}
      {/* This is useful for organizing related content under the About section */}
    </div>
  );
}

export default About;
// overview of its features.
// It is typically the first page users see when they visit the site.