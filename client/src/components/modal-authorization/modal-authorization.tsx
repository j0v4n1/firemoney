import { Form } from 'react-bootstrap';
import styles from '../modal/modal.module.css';
import { ModalTypes } from '../modal/modal.types';
import { useAppDispatch, useAppSelector } from '../../store/store.types';
import { setNumber, setPassword, setType } from '../../store/slices/modal/modal';

export default function ModalAuthorization() {
  const { number, password } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();
  const handleFormNumber = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(setNumber(event.target.value));
  };
  const handleFormPassword = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(setPassword(event.target.value));
  };
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
                dispatch(setType(ModalTypes.VERIFICATION));
              }}
              className={styles['modal__link']}>
              Зарегистрироваться
            </span>
          </div>
          <div className={styles['modal__text']}>
            Забыли пароль?{' '}
            <span
              onClick={() => {
                dispatch(setType(ModalTypes.RESET));
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
