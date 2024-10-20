import { useState } from 'react';
import styles from '../modal/modal.module.css';
import { Form } from 'react-bootstrap';
import { ModalRegisterProps } from './modal-register.types';
import { ModalTypes } from '../modal/modal.types';

export default function ModalRegister({ setType }: ModalRegisterProps) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleFormRepeatPassword = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRepeatPassword(event.target.value);
  };
  const handleFormPassword = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
  };
  const handleFormName = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setName(event.target.value);
  };
  const handleFormLastName = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLastName(event.target.value);
  };
  const handleFormEmail = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label column={true}>Имя</Form.Label>
        <Form.Control value={name} onChange={handleFormName} type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label column={true}>Фамилия</Form.Label>
        <Form.Control value={lastName} onChange={handleFormLastName} type="text" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label column={true}>Электронная почта</Form.Label>
        <Form.Control value={email} onChange={handleFormEmail} type="email" placeholder="" />
      </Form.Group>
      <Form.Group style={{ margin: '0 0 16px' }}>
        <Form.Label column={true} htmlFor="password">
          Пароль
        </Form.Label>
        <Form.Control
          value={password}
          onChange={handleFormPassword}
          type="password"
          id="password"
          aria-describedby="passwordHelpBlock"
          isInvalid={password !== repeatPassword}
          isValid={password === repeatPassword && password !== '' && repeatPassword !== ''}
        />
      </Form.Group>
      <Form.Group>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 0 8px',
          }}>
          <Form.Label style={{ margin: 0 }} htmlFor="repeatPassword" column={true}>
            Повторите пароль
          </Form.Label>
          {password === repeatPassword ? null : (
            <Form.Text style={{ color: 'red', margin: 0 }}>Пароли не совпадают</Form.Text>
          )}
        </div>
        <Form.Control
          value={repeatPassword}
          onChange={handleFormRepeatPassword}
          type="password"
          id="repeatPassword"
          aria-describedby="passwordHelpBlock"
          isInvalid={password !== repeatPassword}
          isValid={password === repeatPassword && password !== '' && repeatPassword !== ''}
        />
        <Form.Text>
          <div className={styles['modal__text']}>
            Уже зарегистрированы?{' '}
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
