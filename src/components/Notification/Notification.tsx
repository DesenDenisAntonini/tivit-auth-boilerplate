import React, { useEffect } from "react";

interface NotificationProps {
  message: string;
  type?: "error" | "success" | "info" | "warning";
  onClose: () => void; // Função para fechar o alerta
}

export const Notification: React.FC<NotificationProps> = ({
  message,
  type = "error",
  onClose,
}) => {
  const notificationStyles = {
    error: "bg-red-500 text-white",
    success: "bg-green-500 text-white",
    info: "bg-blue-500 text-white",
    warning: "bg-yellow-500 text-gray-900",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Fecha o alerta após 3 segundos
    }, 3000);

    return () => clearTimeout(timer); // Limpa o temporizador ao desmontar
  }, [onClose]);

  return (
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 px-6 py-2 rounded-lg shadow-md text-center transition-all duration-500 z-50 ${
        notificationStyles[type]
      }`}
    >
      {message}
    </div>
  );
};
