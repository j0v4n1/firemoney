export enum ModalTypes {
  LOGIN = 'login',
  REGISTER = 'register',
  RESET = 'reset',
  VERIFICATION = 'verification',
  VERIFY = 'verify',
}

export type ModalProps = {
  type: ModalTypes;
};
