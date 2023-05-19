import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import JobCategory from "./Components/JobCategory/JobCategory";
import FeaturedJob from "./Components/FeaturedJob/FeaturedJob";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="body">
      <Navbar></Navbar>
      <Header></Header>
      <JobCategory></JobCategory>
      <FeaturedJob></FeaturedJob>
    </div>
  );
}

export default App;
