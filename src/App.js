import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Admin from "./pages/admin/Admin"
import Search from "./pages/search/Search";
import LoanTaken from "./pages/loan/LoanTaken";
import DuesMonth from "./pages/duesMonth/DuesMonth";
import TotalAmount from "./pages/totalAmount/ToalAmount";
import "./style.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import TotalGivenLoan from "./pages/ToalLoanGiven/ToalGivenLoan";

function App() {
  const {currentUser} = useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext)
  const queryClient = new QueryClient()

  const Layout = () => {
      return (
      <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 8 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path:"/",
      element:(
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/toalgivenLoan",
          element: <TotalGivenLoan />,
        },
        {
          path: "/loanTaken",
          element: <LoanTaken />,
        },
        {
          path: "/duesMonthlyPayment",
          element: <DuesMonth />,
        },
        {
          path: "/totalAmount",
          element: <TotalAmount />,
        },
        
        {
          path: "/search",
          element: <Search />,
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
      
  ]);


  return (
   <div>
   <RouterProvider router={router}/>
   </div>
  );
}

export default App;
