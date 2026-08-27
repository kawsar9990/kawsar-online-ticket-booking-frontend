import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.min.css";


const swalCustomClass = {
  popup: "custom-swal-popup",
  title: "custom-swal-title",
  htmlContainer: "custom-swal-text",
  confirmButton: "custom-swal-button",
};


export const showSuccessAlert = (title: string, text: string = '') => {
    return Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonText: "OK",
    customClass: swalCustomClass,
    buttonsStyling: false, 
    });
};

export const showErrorAlert = (title: string, text: string) => {
  return Swal.fire({
    icon: "error",
    title,
    text,
    confirmButtonText: "OK",
    customClass: swalCustomClass,
    buttonsStyling: false,
  });
};


export const showWarningAlert = (title: string, text: string) => {
  return Swal.fire({
    icon: "warning",
    title,
    text,
    confirmButtonText: "OK",
    customClass: swalCustomClass,
    buttonsStyling: false,
  });
};


export const showInfoAlert = (title: string, text: string) => {
  return Swal.fire({
    icon: "info",
    title,
    text,
    confirmButtonText: "OK",
    customClass: swalCustomClass,
    buttonsStyling: false,
  });
};