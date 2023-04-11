import "../blocks/ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal_content">
        <button type="button" className="modal_close" onClick={onClose} />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form">{children}</form>
        <button type="submit" className="modal__button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
