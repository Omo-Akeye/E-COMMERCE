import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Productpage from "./pages/Productpage";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <PageNotFound/>,
      children:[
        {
          path: "/product",
          element: <Productpage/>,
        },
        {
          path: "/cart",
          element: <Cart/>,
        },
        {
          path: "/wishlist",
          element: <WishList/>,
        },
      ]
    },
   
  ]);

  return (
   <>
     <RouterProvider router={router} />
   </>
  )
}

export default App
