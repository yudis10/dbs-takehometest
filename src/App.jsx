import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from './Templates/MainLayout';
import Home from './pages/Home';
import Form from './pages/Form';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,    
    children: [
      { index: true, element: <Home /> },
      { path: "/form", element: <Form /> },      
    ],
  },
  { path: "/nolayout", element: <Home /> },
]);

function App() {  

  return (
    <RouterProvider router={router} />
  )
}

export default App
