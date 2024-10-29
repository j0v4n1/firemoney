import styles from './user-dashboard.module.css';
import commonStyles from '../../styles/common.module.css';
import { Form } from 'react-bootstrap';
import React from 'react';
import { useAppSelector } from '../../store/store.types';
import avatar from '../../images/ava.png';

export default function UserDashboard() {
  const { name, lastName, email, number } = useAppSelector((state) => state.user);
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
            <Form.Control disabled type="text" value={email} placeholder="" />
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
            <button className={`${commonStyles['btn-order']} ${styles['dashboard__btn']}`}>
              Выйти
            </button>
          </Form.Group>
        </div>
      </div>
    </section>
  );
}
