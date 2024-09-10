export enum ModalTypes {
  LOGIN = 'login',
  REGISTER = 'register',
  RESET = 'reset',
}

export type ModalProps = {
  type: ModalTypes;
};
