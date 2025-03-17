import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/common/Loader";
import Home from "./components/Home";
// const Login = lazy(() => import("./pages/Login"));
function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<h1>Login</h1>} /> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
