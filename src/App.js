import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Project from './pages/Project';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home/>
      ),
    },
    {
      path: "/:projectId",
      element: <Project/>,
    },
  ]);
  return (
    <>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <RouterProvider router={router} />
    </>
  );
}

export default App;
