export enum ModalTypes {
  LOGIN = 'login',
  REGISTER = 'register',
  RESET = 'reset',
  VERIFICATION = 'verification',
  VALIDATION = 'validation',
}

export type ModalProps = {
  type: ModalTypes;
};
