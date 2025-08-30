// import Navbar from "./components/navbar";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Aboutparatest from "./components/Aboutparatest";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout";

function App() {
  const routerpath = createBrowserRouter([ // this method render navbar and footer just one time
    {
      path:'/',
      element: <Layout />, // just render navbar and footer one time 
      children: [
        {
          path: '/',
          // element:  <Navigate to="/home"/>
          element: <Home/>
        },
        {
          path: '/home',
          element:  <Home/>
        },
        {
          path: '/blog',
          element: <Blog/>
        },
        {
          path: '/about/:username',
          element: <Aboutparatest/>
        },
      ]
    },
  ])

  // const router2 = createBrowserRouter([  // this method render navbar and footer on each render
  //   {
  //     path: "/",
  //     // element:  <Navigate to="/home"/>
  //     element: <><Navbar /><Home /></>,
  //   },
  //   {
  //     path: "/home",
  //     element: <><Navbar /><Home /></>,
  //   },
  //   {
  //     path: "/blog",
  //     element: <><Navbar /><Blog /></>,
  //   },
  //    {
  //     path: '/about/:username',
  //     element: <><Navbar /><Aboutparatest/></>
  //   },
  // ]);

  return (
    <>
      <RouterProvider router={routerpath} />

      {/* <RouterProvider router={router2}/> // part of each render code
      <Footer/> */}
    </>
  );
}

export default App;
