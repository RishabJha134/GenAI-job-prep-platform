import React from "react";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { router } from "./routes/app.routes.jsx";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" richColors theme="dark" />
    </>
  );
};

export default App;
