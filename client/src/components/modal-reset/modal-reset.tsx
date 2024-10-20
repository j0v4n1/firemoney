import { Form } from 'react-bootstrap';
import styles from '../modal/modal.module.css';
import { useState } from 'react';
import { ModalResetProps } from './modal-reset.types';
import { ModalTypes } from '../modal/modal.types';

export default function ModalReset({ setType }: ModalResetProps) {
  const [email, setEmail] = useState('');
  const handleFormEmail = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(event.target.value);
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
                setType(ModalTypes.LOGIN);
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
