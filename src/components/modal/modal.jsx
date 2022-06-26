import "../../assets/css/modal.css";
import ReactPortal from "../../utils/portal";

function Modal({ children, isOpen, handleClose }) {
  if (!isOpen) return null;

  return (
    <ReactPortal>
      <div className="modal">
        <div onClick={handleClose} className="modal-bg"></div>

        <div className="modal-content">
          <div className="modal-header">
            <button onClick={handleClose} className="close-btn">
              close
            </button>
          </div>
          <div className="scrollable-content">{children}</div>
        </div>
      </div>
    </ReactPortal>
  );
}
export default Modal;
