import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer autoClose={3000} position="top-center" />
    </BrowserRouter>
  );
};
