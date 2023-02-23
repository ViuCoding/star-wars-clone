// react router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";
import StarshipsLayout from "./layouts/StarshipsLayout";

// pages
import Home from "./pages/home/Home";
import StarshipDetails from "./pages/starships/StarshipDetails";
import StarshipsPage from "./pages/starships/StarshipsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='starships' element={<StarshipsLayout />}>
        <Route index element={<StarshipsPage />} />
        <Route path=':id' element={<StarshipDetails />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
