import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);
function App() {
  return (
    <>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
