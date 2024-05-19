import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./layout/MyRoutes";

// import NavBars from "./componentss/NavBars";
// import Hero from "./componentss/Hero";
// import About from "./componentss/About";
// import Testimonials from "./componentss/Testimonials";
// import Demo from "./componentss/Demo";
// import Footer from "./componentss/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
