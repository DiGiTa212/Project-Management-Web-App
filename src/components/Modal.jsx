import { forwardRef } from "react";
import { createPortal } from 'react-dom';
import Button from "./Button";

const Modal = forwardRef(({ children, btnCaption }, ref) => {
  return createPortal(
    <dialog
      ref={ref}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{btnCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
