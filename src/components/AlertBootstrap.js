import Alert from "react-bootstrap/Alert";

export default function AlertBootstrap({ alert, close }) {
  return (
    <div>
      {alert.isOpen && (
        <Alert variant="warning" dismissible onClose={close}>
          {alert.message}
        </Alert>
      )}
    </div>
  );
}
