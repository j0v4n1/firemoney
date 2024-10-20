import { Form } from 'react-bootstrap';
import styles from '../modal/modal.module.css';
import { useState } from 'react';
import { ModalVerificationProps } from './modal-verification.types';
import { ModalTypes } from '../modal/modal.types';

export default function ModalVerification({ isConflict, modalType, setType }: ModalVerificationProps) {
  const [number, setNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState<number | null>(null);

  const handleFormNumber = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = event.target.value;
    value = value.replace(/[^0-9]/g, '');
    if (!value.startsWith('7')) {
      value = '7' + value;
    }
    setNumber('+' + value);
  };

  const handleFormVerificationCode = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setVerificationCode(+event.target.value);
  };

  return (
    <>
      <Form.Group style={{ position: 'relative' }} className="mb-3">
        <Form.Label column={true}>
          {modalType === ModalTypes.VERIFICATION ? 'Номер телефона' : 'Введите код из SMS'}
        </Form.Label>
        <Form.Control
          className={styles['modal__form-number']}
          value={modalType === ModalTypes.VERIFICATION ? number : verificationCode ? verificationCode : ''}
          onChange={modalType === ModalTypes.VERIFICATION ? handleFormNumber : handleFormVerificationCode}
          type="text"
          placeholder=""
        />
        <Form.Text className={styles['modal__form-number-warning-text']}>
          {modalType === ModalTypes.VERIFICATION
            ? isConflict
              ? 'Пользователь с таким номером уже существует'
              : ''
            : isConflict
              ? 'Неверный код'
              : ''}
        </Form.Text>
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
