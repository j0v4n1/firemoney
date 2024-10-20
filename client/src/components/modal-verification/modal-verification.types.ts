import { ModalTypes } from '../modal/modal.types';

export type ModalVerificationProps = {
  number: string;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  handleFormNumber: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isConflict: boolean;
  modalType: ModalTypes;
  setType: React.Dispatch<React.SetStateAction<ModalTypes>>;
  setIsConflict: React.Dispatch<React.SetStateAction<boolean>>;
};
