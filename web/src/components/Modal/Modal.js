import './modalStyles.scss'

const Modal = ({ closeModal, children }) => {
  return (
    <div className="kc-modal">
      <div className="kc-modal_overlay" />
      <div className="kc-modal_content">
        <div className="kc-modal_controlls">
          <button onClick={closeModal} className="kc-modal_close">
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
