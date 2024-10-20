import { ModalTypes } from '../modal/modal.types';

export type ModalVerificationProps = {
  isConflict: boolean;
  modalType: ModalTypes;
  setType: React.Dispatch<React.SetStateAction<ModalTypes>>;
};
