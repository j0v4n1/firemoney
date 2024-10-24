import { Form } from 'react-bootstrap';
import styles from '../modal/modal.module.css';
import { useEffect } from 'react';
import { ModalTypes } from '../modal/modal.types';
import { useAppDispatch, useAppSelector } from '../../store/store.types';
import {
  setNumber,
  setIsConflict,
  setType,
  setVerificationCode,
  setIsButtonDisabled,
  setTimesResendCode,
} from '../../store/slices/modal/modal';
import { sendNumber } from '../../utils/common';
import Timer from '../timer/timer';

export default function ModalVerification() {
  const { number, verificationCode, type, isConflict, isResendCodeButtonVisible } = useAppSelector(
    (store) => store.modal
  );
  const tempNumber = useAppSelector((store) => store.user.number);
  const { isDataSending, timesResendCode, isButtonDisabled } = useAppSelector(
    (store) => store.modal
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(setNumber(''));
      dispatch(setIsConflict(false));
    };
  }, []);

  const handleResendCode = () => {
    if (isButtonDisabled || isDataSending) {
      return;
    }
    dispatch((dispatch, getState) => {
      const currentTimesResendCode = getState().modal.timesResendCode;
      dispatch(setTimesResendCode(currentTimesResendCode + 1));
    });
    dispatch(setIsButtonDisabled(true));
    sendNumber(tempNumber, dispatch, isResendCodeButtonVisible);
  };

  const handleFormVerificationCode = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setVerificationCode(+event.target.value));
  };
  const handleFormNumber = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(setNumber(event.target.value));
  };

  return (
    <>
      <Form.Group style={{ position: 'relative' }} className="mb-3">
        <Form.Label column={true}>
          {type === ModalTypes.VERIFICATION ? 'Номер телефона' : 'Введите код из SMS'}
        </Form.Label>
        <Form.Control
          isInvalid={isConflict}
          className={styles['modal__form-number']}
          value={
            type === ModalTypes.VERIFICATION ? number : verificationCode ? verificationCode : ''
          }
          onChange={
            type === ModalTypes.VERIFICATION ? handleFormNumber : handleFormVerificationCode
          }
          type="text"
          placeholder=""
        />
        <Form.Text className={styles['modal__form-number-warning-text']}>
          {type === ModalTypes.VERIFICATION
            ? isConflict
              ? 'Пользователь с таким номером уже существует'
              : ''
            : isConflict
              ? 'Код подтверждения неверный'
              : ''}
        </Form.Text>
        <Form.Text>
          <div className={styles['modal__text']}>
            Уже зарегистрированы?{' '}
            <span
              onClick={() => {
                dispatch(setType(ModalTypes.LOGIN));
              }}
              className={styles['modal__link']}>
              Войти
            </span>
          </div>
          <div className={styles['modal__text']}>
            {isResendCodeButtonVisible ? (
              <span
                onClick={handleResendCode}
                className={
                  isButtonDisabled || isDataSending
                    ? `${styles['modal__link']} ${styles['modal__link_disabled']}`
                    : styles['modal__link']
                }>
                {isButtonDisabled ? <Timer /> : 'Получить код повторно'}
              </span>
            ) : null}
          </div>
        </Form.Text>
      </Form.Group>
    </>
  );
}
