import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notificationOptions = {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

const notification = {
  success: (message) => {
    toast.success(message, notificationOptions);
  },
  error: (message) => {
    toast.error(message, notificationOptions);
  }
};

const Notification = () => {
  return <ToastContainer />;
};

export { Notification, notification };
