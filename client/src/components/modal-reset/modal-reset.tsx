import { Form } from 'react-bootstrap';
import styles from '../modal/modal.module.css';
import { ModalTypes } from '../modal/modal.types';
import { useAppDispatch, useAppSelector } from '../../store/store.types';
import { setNumber, setType } from '../../store/slices/modal/modal';
import React from 'react';

export default function ModalReset() {
  const { number } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();
  const handleFormNumber = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(setNumber(event.target.value));
  };
  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column={true}>Номер телефона</Form.Label>
        <Form.Control value={number} onChange={handleFormNumber} type="text" placeholder="" />
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
