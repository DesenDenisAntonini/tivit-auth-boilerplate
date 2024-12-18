import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "./src/pages/SigIn/SignIn";
import { Profile } from "./src/pages/Profile/Profile";
import { useSelector } from "react-redux";

export const AppRoutes: React.FC = () => {
  const { token, role } = useSelector((state: any) => state.auth);

  return (
    <Routes>
      {/* Rota pública para login */}
      <Route
        path="/"
        element={!token ? <SignIn /> : <Navigate to="/profile" replace />}
      />

      {/* Rota protegida para qualquer usuário logado */}
      <Route
        path="/profile"
        element={token ? <Profile /> : <Navigate to="/" replace />}
      />

      {/* Rota protegida específica para admin */}
      {role === "admin" && (
        <Route
          path="/admin"
          element={<Profile />} // Ou uma página específica para admin
        />
      )}

      {/* Fallback para rotas inválidas */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
