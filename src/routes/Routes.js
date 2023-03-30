import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Dashboardpage from "../pages/DashboardPage";
import Errorpage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    element:<Main />,
    children: [
      {
        path: '/',
        element: <Dashboardpage />
      },
    ]
  },
  {
    path: '*',
    element: <Errorpage />
  }
])

export default router;