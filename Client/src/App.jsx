import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/common/Loader";
import Home from "./components/Home";
import { SignedIn } from "@clerk/clerk-react";

const Transaction = lazy(() => import("./pages/Transaction"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/transaction/create"
            element={
              <SignedIn>
                <Transaction />
              </SignedIn>
            }
          />
          <Route
            path="/dashboard"
            element={
              <SignedIn>
                <Dashboard />
              </SignedIn>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
