import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  }
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
