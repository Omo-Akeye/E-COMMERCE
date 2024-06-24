import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Productpage from "./pages/Productpage";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <PageNotFound/>,
      children:[
        {
           path: '/',
           element: <Homepage/>
        },
        {
          path: "/product",
          element: <Productpage/>,
        },
        {
          path:'/product/:name',
          element:<ProductDetails/>
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
