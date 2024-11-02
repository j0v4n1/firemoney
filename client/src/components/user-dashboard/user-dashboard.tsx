import styles from './user-dashboard.module.css';
import commonStyles from '../../styles/common.module.css';
import { Form } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../store/store.types';
import avatar from '../../images/ava.png';
import Button from 'react-bootstrap/Button';
import { toggleLockScroll } from '../../utils/common';
import { setIsLoggingOut } from '../../store/slices/user/user';
import { sendEmailForActivation } from '../../utils/api';
import { openModal, setIsSendingRequest, setType } from '../../store/slices/modal/modal';
import { Spinner } from 'react-bootstrap/';
import { ModalTypes } from '../modal/modal.types';

export default function UserDashboard() {
  const { name, lastName, email, number, isActivatedEmail } = useAppSelector((state) => state.user);
  const { isSendingRequest } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const handleButton = (button: 'logout' | 'confirm') => {
    if (button === 'logout') {
      dispatch(setIsLoggingOut(true));
      toggleLockScroll('lock');
      setTimeout(() => {
        dispatch(setIsLoggingOut(false));
        toggleLockScroll('unlock');
      }, 3000);
    } else {
      dispatch(setIsSendingRequest(true));
      sendEmailForActivation(email)
        .then(() => {
          dispatch(setIsSendingRequest(false));
          dispatch(setType(ModalTypes.INFORMATION));
          dispatch(openModal());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className={styles['dashboard']}>
      <div className={styles['dashboard__personal-info']}>
        <div className={styles['dashboard__img-container']}>
          <img className={styles['dashboard__img']} src={avatar} alt="" />
          <button className={`${commonStyles['btn-order']} ${styles['dashboard__btn']}`}>
            Загрузить фото
          </button>
        </div>
        <div className={styles['dashboard__form-container']}>
          <h2 className={`${commonStyles['section-title']} ${styles['dashboard__title']}`}>
            Личные данные
          </h2>
          <Form.Group className="mb-3">
            <Form.Label column={true}>Имя</Form.Label>
            <Form.Control disabled value={name} type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column={true}>Фамилия</Form.Label>
            <Form.Control disabled value={lastName} type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label column={true}>E-mail</Form.Label>
            <Form.Control
              isInvalid={!isActivatedEmail}
              disabled
              type="text"
              value={email}
              placeholder=""
            />
            {isActivatedEmail ? null : (
              <Form.Floating style={{ color: 'red' }}>Почта не подверждена</Form.Floating>
            )}
            {isActivatedEmail ? null : (
              <Button
                onClick={() => {
                  handleButton('confirm');
                }}
                className={`${commonStyles['btn-order']} ${styles['dashboard__btn']}`}>
                {isSendingRequest ? <Spinner size={'sm'} /> : 'Подтвердить'}
              </Button>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label column={true}>Номер телефона</Form.Label>
            <Form.Control disabled value={number} type="text" placeholder="" />
          </Form.Group>
        </div>
        <div className={styles['dashboard__subscribes']}>
          <h2 className={`${commonStyles['section-title']} ${styles['dashboard__title']}`}>
            Подписки
          </h2>
          <Form.Group className={styles['dashboard__checkbox-container']}>
            <div className={styles['dashboard__checkbox']}>
              <Form.Check />
              <Form.Label className="mx-3" column={true}>
                Сообщать о бонусах, акциях и новых продуктах
              </Form.Label>
            </div>
            <button
              onClick={() => {
                handleButton('logout');
              }}
              className={`${commonStyles['btn-order']} ${styles['dashboard__btn']}`}>
              Выйти
            </button>
          </Form.Group>
        </div>
      </div>
    </section>
  );
}
