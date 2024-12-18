import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { removeToken } from "../../utils/tokenUtils";

interface ProfileProps {
  onLogout?: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ onLogout }) => {
  const { role } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "auth/logout" });
    removeToken();
    document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <h1 className="text-3xl mb-4">
        Bem-vindo, {role === "admin" ? "Administrador" : "Usuário"}!
      </h1>
      <p>Você está logado como: {role}</p>

      <Button onClick={onLogout || handleLogout} className="mt-2 w-20">
        Sair
      </Button>
    </div>
  );
};
