import { ModalTypes } from '../../../components/modal/modal.types';

export type ModalState = {
  isOpened: boolean;
  type: ModalTypes;
  name: string;
  lastName: string;
  number: string;
  verificationCode: number | null;
  email: string;
  password: string;
  repeatPassword: string;
  isSendingRequest: boolean;
  isConflict: boolean;
  isResendCodeButtonVisible: boolean;
  isButtonDisabled: boolean;
  timesResendCode: number;
};
