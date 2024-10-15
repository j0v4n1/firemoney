import styles from './modal.module.css';
import commonStyles from '../../styles/common.module.css';
import Button from 'react-bootstrap/Button';
import { Modal as ModalBootstrap } from 'react-bootstrap/';
import Form from 'react-bootstrap/Form';
import { useAppDispatch, useAppSelector } from '../../store/store.types';
import { closeModal } from '../../store/slices/modal/modal';
import { ModalTypes } from './modal.types';
import React, { useState } from 'react';

export default function Modal() {
  const { isOpened } = useAppSelector((store) => store.modal);

  const dispatch = useAppDispatch();

  const [type, setType] = useState(ModalTypes.LOGIN);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const onClose = () => {
    dispatch(closeModal());
    setTimeout(() => {
      setEmail('');
      setPassword('');
      setRepeatPassword('');
      setType(ModalTypes.LOGIN);
    }, 300);
  };

  const handleFormRepeatPassword = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
  const handleFormNumber = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = event.target.value;

    value = value.replace(/[^0-9]/g, '');

    if (!value.startsWith('7')) {
      value = '7' + value;
    }

    setNumber('+' + value);
  };
  const handleFormEmail = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(event.target.value);
  };

  const generateTitle = () => {
    switch (type) {
      case ModalTypes.REGISTER:
        return 'Регистрация';
      case ModalTypes.RESET:
        return 'Восстановление пароля';
      default:
        return 'Вход в личный кабинет';
    }
  };

  const generateLinks = () => {
    switch (type) {
      case ModalTypes.REGISTER:
        return (
          <div className={styles['modal__text']}>
            Уже зарегистрированы?{' '}
            <a
              onClick={() => {
                setType(ModalTypes.LOGIN);
              }}
              className={styles['modal__link']}
              href="#">
              Войти
            </a>
          </div>
        );
      case ModalTypes.RESET:
        return (
          <div className={styles['modal__text']}>
            Вспомнили пароль?{' '}
            <a
              onClick={() => {
                setType(ModalTypes.LOGIN);
              }}
              className={styles['modal__link']}
              href="#">
              Войти
            </a>
          </div>
        );
      default:
        return (
          <>
            <div className={styles['modal__text']}>
              Вы — новый пользователь?{' '}
              <a
                onClick={() => {
                  setType(ModalTypes.REGISTER);
                }}
                className={styles['modal__link']}
                href="#">
                Зарегистрироваться
              </a>
            </div>
            <div className={styles['modal__text']}>
              Забыли пароль?{' '}
              <a
                onClick={() => {
                  setType(ModalTypes.RESET);
                }}
                className={styles['modal__link']}
                href="#">
                Восстановить пароль
              </a>
            </div>
          </>
        );
    }
  };

  const generateForm = () => {
    switch (type) {
      case ModalTypes.REGISTER:
        return (
          <>
            <Form.Group className="mb-3">
              <Form.Label column={true}>Имя</Form.Label>
              <Form.Control value={name} onChange={handleFormName} type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column={true}>Фамилия</Form.Label>
              <Form.Control
                value={lastName}
                onChange={handleFormLastName}
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label column={true}>Номер телефона</Form.Label>
              <Form.Control
                className={styles['modal__form-number']}
                value={number}
                onChange={handleFormNumber}
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
              <Form.Text className={styles['modal__help-block']} id="passwordHelpBlock" muted>
                {generateLinks()}
              </Form.Text>
            </Form.Group>
          </>
        );
      case ModalTypes.RESET:
        return (
          <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column={true}>Электронная почта</Form.Label>
              <Form.Control value={email} onChange={handleFormEmail} type="email" placeholder="" />
              <Form.Text className={styles['modal__help-block']} id="passwordHelpBlock" muted>
                {generateLinks()}
              </Form.Text>
            </Form.Group>
          </>
        );
      default:
        return (
          <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label column={true}>Электронная почта</Form.Label>
              <Form.Control value={email} onChange={handleFormEmail} type="email" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label column={true} htmlFor="inputPassword5">
                Пароль
              </Form.Label>
              <Form.Control
                value={password}
                onChange={handleFormPassword}
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
              <Form.Text className={styles['modal__help-block']} id="passwordHelpBlock" muted>
                {generateLinks()}
              </Form.Text>
            </Form.Group>
          </>
        );
    }
  };

  return (
    <ModalBootstrap
      onHide={onClose}
      show={isOpened}
      size="lg"
      dialogClassName={styles['modal']}
      contentClassName={styles['modal__content']}
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <ModalBootstrap.Header closeButton>
        <ModalBootstrap.Title id="contained-modal-title-vcenter">
          {generateTitle()}
        </ModalBootstrap.Title>
      </ModalBootstrap.Header>
      <ModalBootstrap.Body>{generateForm()}</ModalBootstrap.Body>
      <ModalBootstrap.Footer>
        <Button className={commonStyles['btn-order'] + ' ' + styles['btn-order_size']}>
          Отправить
        </Button>
      </ModalBootstrap.Footer>
    </ModalBootstrap>
  );
}
