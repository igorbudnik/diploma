import modalStyle from "./modal-overlay.module.css";

export interface PropsOverlay {
  changeOpen: () => void;
}

const ModalOverlay = (props: PropsOverlay) => {
  const { changeOpen } = props;

  return <div onClick={() => changeOpen()} className={modalStyle.full}></div>;
};

export default ModalOverlay;
