import React from "react";
import { Logo } from "../Logo/Logo";

export const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
      <div className="flex flex-col items-center animate-spin-slow">
        <Logo className="w-32 h-32 mb-4 animate-spin" />
        <span className="text-white text-lg">Carregando...</span>
      </div>
    </div>
  );
};
