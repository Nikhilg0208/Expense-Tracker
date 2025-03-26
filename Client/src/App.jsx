import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/common/Loader";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Home from "./pages/Home";

const SignedIn = lazy(() => import("./pages/SignedIn"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const SignedUp = lazy(() => import("./pages/SignedUp"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignedIn />} />
          <Route path="/signup" element={<SignedUp />} />
          <Route
            path="/transaction/create"
            element={
              <ProtectedRoute>
                <Transaction />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
