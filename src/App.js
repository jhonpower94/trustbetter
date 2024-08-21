import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Hometab from "./pages/Hometab";
import Login from "./pages/Login";
import Resetemail from "./pages/Resetemail";
import Signup from "./pages/Signup";
import Transfertab from "./pages/Transfertab";
import { DashboardIndex } from "./pages/dashboardindex";
import { TabIndex } from "./pages/tabindex";
import CardPage from "./pages/Card";
import PageBackButton from "./pages/pageback";
import TransferMain from "./pages/transfer/main";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardIndex />,
      children: [
        {
          path: "/",
          element: <TabIndex />,
          children: [
            {
              path: "/",
              element: <Hometab />,
            },
            {
              path: "/transfer",
              element: <Transfertab />,
            },
            {
              path: "/card",
              element: <CardPage />,
            },
          ],
        },
        {
          path: "/transfer",
          element: <PageBackButton />,
          children: [{ path: "/transfer/send", element: <TransferMain /> }],
        },
      ],
    },
    {
      path: "/auth",
      element: <Outlet />,
      children: [
        { path: "/auth/login", element: <Login /> },
        { path: "/auth/register", element: <Signup /> },
        { path: "/auth/resetpass", element: <Resetemail /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
