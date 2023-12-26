import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

export default function useAlertHook() {
  const [alertStatus, setAlertStatus] = useState({
    isOpen: false,
    message: "",
  });

  const showAlert = (message) => {
    setAlertStatus({
      isOpen: true,
      message: message,
    });

    setTimeout(() => {
      setAlertStatus({
        isOpen: false,
        message: "",
      });
    }, 2000);
  };

  const AlertToast = () => {
    return (
      <div>
        {alertStatus.isOpen && (
          <Alert variant="warning" dismissible>
            {alertStatus.message}
          </Alert>
        )}
      </div>
    );
  };

  return { showAlert, AlertToast };
}
