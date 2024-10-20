import { Form } from 'react-bootstrap';
import styles from '../modal/modal.module.css';
import { ModalTypes } from '../modal/modal.types';
import { useAppDispatch, useAppSelector } from '../../store/store.types';
import { setEmail, setType } from '../../store/slices/modal/modal';

export default function ModalReset() {
  const { email } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();
  const handleFormEmail = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(setEmail(event.target.value));
  };
  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column={true}>Электронная почта</Form.Label>
        <Form.Control value={email} onChange={handleFormEmail} type="email" placeholder="" />
        <Form.Text>
          <div className={styles['modal__text']}>
            Вспомнили пароль?{' '}
            <span
              onClick={() => {
                dispatch(setType(ModalTypes.LOGIN));
              }}
              className={styles['modal__link']}>
              Войти
            </span>
          </div>
        </Form.Text>
      </Form.Group>
    </>
  );
}
