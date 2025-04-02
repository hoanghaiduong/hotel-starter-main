import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/room/:id",
    element: <RoomDetails />,
  },
]);

const App = () => {
  
  return (
    <div>
      <Header />
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
};

export default App;
