// import { useState } from "react";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import ThemeContext from "./ThemeContext";
// import Layout from "./Layout";
// import Home from "./Home";
// import About from "./About";
// import UserProfile from "./UserProfile";
// import useLocalStorage from "./hooks/useLocalStorage";

// function App() {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const [count, setCount] = useLocalStorage("myCounter", 0);
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         { index: true, element: <Home /> },
//         { path: "about", element: <About /> },
//         { path: "users/:userId", element: <UserProfile /> },
//       ],
//     },
//   ]);

//   return (
//     <ThemeContext.Provider value={theme}>
//       <div>
//         <h2>Global Controls</h2>
//         <button onClick={toggleTheme}>
//           Toggle Theme ({theme})
//         </button>
//         <button onClick={() => setCount(count + 1)}>
//           Counter: {count}
//         </button>

//         <hr />

//         <RouterProvider router={router} />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PostDetail from "./pages/PostDetail";
import ProtectedRoute from "./routes/ProtectedRoute";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<ProtectedRoute />}>
        <Route index element={<Dashboard />} />
        <Route path="post/:postId" element={<PostDetail />} />
      </Route>
    </Routes>
  );
}

