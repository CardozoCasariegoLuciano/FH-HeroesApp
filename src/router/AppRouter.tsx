import { Route, Routes } from "react-router-dom";
import LoginPage from "../auth/pages/LoginPage";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/*Rutas publicas */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        {/*Rutas privadas */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
