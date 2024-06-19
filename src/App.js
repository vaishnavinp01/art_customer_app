import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./layout/MyRoutes";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
// import CustomSnackbar from "./Components/CustomSnackbar";

function App() {
  // Loading
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setloading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      )}
      {/* <CustomSnackbar/> */}
    </div>
  );
}

export default App;
