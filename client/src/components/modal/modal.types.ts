export enum ModalTypes {
  LOGIN = 'login',
  REGISTER = 'register',
  RESET = 'reset',
  VERIFICATION = 'verification',
  VERIFY = 'verify',
  VERIFY_TO_RESET = 'verify-to-reset',
  INFO_ACTIVATE = 'info-activate',
  INFO_RESET = 'info-reset',
  NEW_PASSWORD = 'new-password',
  LOAN_APPLICATION = 'loan-application',
}

export type ModalProps = {
  type: ModalTypes;
};
