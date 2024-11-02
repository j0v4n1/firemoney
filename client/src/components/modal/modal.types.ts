export enum ModalTypes {
  LOGIN = 'login',
  REGISTER = 'register',
  RESET = 'reset',
  VERIFICATION = 'verification',
  VERIFY = 'verify',
  INFORMATION = 'information',
}

export type ModalProps = {
  type: ModalTypes;
};
