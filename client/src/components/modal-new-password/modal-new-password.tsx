import { Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../store/store.types';
import { setPassword, setRepeatPassword } from '../../store/slices/modal/modal';
import React from 'react';

export default function ModalNewPassword() {
  const { password, repeatPassword } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();
  const handleFormPassword = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(setPassword(event.target.value));
  };
  const handleFormRepeatPassword = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setRepeatPassword(event.target.value));
  };
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label column={true}>Новый пароль</Form.Label>
        <Form.Control
          value={password}
          onChange={handleFormPassword}
          type="password"
          placeholder=""
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label column={true}>Повторите новый пароль</Form.Label>
        <Form.Control
          value={repeatPassword}
          onChange={handleFormRepeatPassword}
          type="password"
          placeholder=""
        />
      </Form.Group>
    </>
  );
}
