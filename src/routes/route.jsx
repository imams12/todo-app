import { createBrowserRouter } from "react-router-dom";
import Todo from "../pages/Todo/Todo.jsx";
import Home from "../pages/Home/Home.jsx";
import AppComponent from "../App.jsx";
import Profile from "../pages/Profile/component/Profile.jsx";
import ErrorPage from "../error-pages.jsx";
import Login from "../pages/Authentication/components/Login.jsx";
import Product from "../pages/Product/Product.jsx";
import Dashboard from "../shared/Dashboard/Dashboard.jsx";
import TodoForm from "../pages/Todo/Component/TodoForm.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/",
    element: <AppComponent />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/todos",
        element: <Todo />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "todos/form",
        element: <TodoForm/>,
      },
      
    ],
  },
]);

export default router;
