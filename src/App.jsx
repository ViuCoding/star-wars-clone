// react router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// context
import { useUserContext } from "./hooks/useUserContext";

// layouts
import RootLayout from "./layouts/RootLayout";
import StarshipsLayout from "./layouts/StarshipsLayout";

// pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
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

      <Route path='signup' element={<Signup />} />

      <Route path='login' element={<Login />} />
    </Route>
  )
);

function App() {
  const { authIsReady } = useUserContext();
  return <>{authIsReady && <RouterProvider router={router} />}</>;
}

export default App;
