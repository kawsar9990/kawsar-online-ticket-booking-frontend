import { toast, ToastOptions } from 'react-toastify'

const defaultOption: ToastOptions = {

position: "top-right",
autoClose: 3500,
hideProgressBar: false,
closeOnClick: true,
theme: "light",
pauseOnHover: true,
draggable: true,
};

export const notify = {
    success: (message: string, options?: ToastOptions) => {
        toast.success(message, {...defaultOption, ...options})
    },
    error: (message: string, options?: ToastOptions) => {
    toast.error(message, { ...defaultOption, ...options });
   },
   warning: (message: string, options?: ToastOptions) => {
    toast.warn(message, { ...defaultOption, ...options });
  },
  info: (message: string, options?: ToastOptions) => {
    toast.info(message, { ...defaultOption, ...options });
  },
}