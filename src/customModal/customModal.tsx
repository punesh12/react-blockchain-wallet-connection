import { ModalContainer, ModalContent } from "./style";

const CustomModal = (props: any) => {
  const { show, toggleModal, styles } = props;

  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <ModalContainer
      show={show}
      onMouseDown={handleClickOutside}
      style={{ ...styles }}
    >
      <ModalContent>{props.children}</ModalContent>
    </ModalContainer>
  );
};

export default CustomModal;
