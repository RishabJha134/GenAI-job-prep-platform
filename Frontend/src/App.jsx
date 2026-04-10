import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes/app.routes.jsx";

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
