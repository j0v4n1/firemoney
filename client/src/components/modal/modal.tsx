import styles from './modal.module.css';
import commonStyles from '../../styles/common.module.css';
import Button from 'react-bootstrap/Button';
import { Modal as ModalBootstrap } from 'react-bootstrap/';
import Form from 'react-bootstrap/Form';
import { useAppDispatch, useAppSelector } from '../../store/store.types';
import { closeModal } from '../../store/slices/modal/modal';
import { ModalProps, ModalTypes } from './modal.types';
import { useState, useEffect } from 'react';

export default function Modal() {
  const { isOpened } = useAppSelector((store) => store.modal);
  const dispatch = useAppDispatch();

  const [type, setType] = useState(ModalTypes.LOGIN);

  const onClose = () => dispatch(closeModal());

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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Электронная почта</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group style={{ margin: '0 0 16px' }}>
              <Form.Label htmlFor="password">Пароль</Form.Label>
              <Form.Control type="password" id="password" aria-describedby="passwordHelpBlock" />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="repeatPassword">Повторите пароль</Form.Label>
              <Form.Control
                type="password"
                id="repeatPassword"
                aria-describedby="passwordHelpBlock"
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
              <Form.Label>Электронная почта</Form.Label>
              <Form.Control type="email" placeholder="" />
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
              <Form.Label>Электронная почта</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="inputPassword5">Пароль</Form.Label>
              <Form.Control
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
