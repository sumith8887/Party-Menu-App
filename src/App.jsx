import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import SignIn from "./pages/SignIn/SignIn";
import Menu from "./pages/Menu/Menu";
import FoodDetail from "./pages/FoodDetail/FoodDetail";
import SavedRecipes from "./pages/SavedRecipes/SavedRecipes";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />

        <Route path="/menu/:id" element={<FoodDetail />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;