// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import {
// //   createBrowserRouter,
// //   RouterProvider,
// // } from "react-router-dom";

// // import Layout from "./Layout";
// // import Home from "./Home";
// // import About from "./About";
// // import UserProfile from "./UserProfile";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <Layout />,
// //     children: [
// //       {
// //         index: true,
// //         element: <Home />,
// //       },
// //       {
// //         path: "about",
// //         element: <About />,
// //       },
// //       {
// //         path: "users/:userId",
// //         element: <UserProfile />,
// //       },
// //     ],
// //   },
// // ]);

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <RouterProvider router={router} />
// //   </React.StrictMode>
// // );
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

