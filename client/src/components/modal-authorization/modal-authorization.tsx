import { Form } from 'react-bootstrap';
import { ModalAuthorizationProps } from './modal-authorization.types';
import styles from '../modal/modal.module.css';
import { ModalTypes } from '../modal/modal.types';

export default function ModalAuthorization({
  setType,
  password,
  handleFormPassword,
  number,
  handleFormNumber,
}: ModalAuthorizationProps) {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label column={true}>Номер телефона</Form.Label>
        <Form.Control value={number} onChange={handleFormNumber} type="email" placeholder="" />
      </Form.Group>
      <Form.Group>
        <Form.Label column={true} htmlFor="password">
          Пароль
        </Form.Label>
        <Form.Control value={password} onChange={handleFormPassword} type="password" id="password" />
        <Form.Text id="passwordHelpBlock" muted>
          <div className={styles['modal__text']}>
            Вы — новый пользователь?{' '}
            <span
              onClick={() => {
                setType(ModalTypes.VERIFICATION);
              }}
              className={styles['modal__link']}>
              Зарегистрироваться
            </span>
          </div>
          <div className={styles['modal__text']}>
            Забыли пароль?{' '}
            <span
              onClick={() => {
                setType(ModalTypes.RESET);
              }}
              className={styles['modal__link']}>
              Восстановить пароль
            </span>
          </div>
        </Form.Text>
      </Form.Group>
    </>
  );
}
