import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/form", element: <AddUser /> },
      ],
    },
    { path: "/nolayout", element: <Home /> },
  ],
  {
    basename: "/dbs-takehometest/",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
