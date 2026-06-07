import { createBrowserRouter } from "react-router";
import Auth from "../features/auth/pages/Auth.jsx";
import Protected from "../features/auth/components/Protected.jsx";
import Home from "../features/interview/pages/Home.jsx";
import Interview from "../features/interview/pages/Interview.jsx";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Auth isLogin={true} key="login" />,
  },
  {
    path: "/register",
    element: <Auth isLogin={false} key="register" />,
  },
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/interview/:interviewId",
    element: (
      <Protected>
        <Interview/>
      </Protected>
    ),
  },
]);
