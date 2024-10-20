import { ModalTypes } from '../modal/modal.types';

export type ModalAuthorizationProps = {
  setType: React.Dispatch<React.SetStateAction<ModalTypes>>;
  password: string;
  handleFormPassword: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  number: string;
  handleFormNumber: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};
