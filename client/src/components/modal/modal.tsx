import styles from './modal.module.css';
import commonStyles from '../../styles/common.module.css';
import Button from 'react-bootstrap/Button';
import { Modal as ModalBootstrap } from 'react-bootstrap/';
import { Spinner } from 'react-bootstrap/';
import { useAppDispatch, useAppSelector } from '../../store/store.types';
import {
  closeModal,
  setName,
  setLastName,
  setNumber,
  setVerificationCode,
  setEmail,
  setPassword,
  setRepeatPassword,
  setIsConflict,
  setIsSendingRequest,
  setType,
} from '../../store/slices/modal/modal';
import { ModalTypes } from './modal.types';
import { sendUserData, sendVerificationCode } from '../../utils/api';
import ModalRegister from '../modal-register/modal-register';
import ModalVerification from '../modal-verification/modal-verification';
import ModalReset from '../modal-reset/modal-reset';
import ModalAuthorization from '../modal-authorization/modal-authorization';
import { setIsAuthorizedUser, setTempNumber, setUser } from '../../store/slices/user/user';
import { sendNumber } from '../../utils/common';
import ModalInformation from '../modal-information/modal-information';

export default function Modal() {
  const {
    isOpened,
    type,
    number,
    verificationCode,
    isSendingRequest,
    name,
    lastName,
    email,
    password,
    isResendCodeButtonVisible,
  } = useAppSelector((store) => store.modal);
  const tempNumber = useAppSelector((store) => store.user.number);

  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(closeModal());
    setTimeout(() => {
      dispatch(setName(''));
      dispatch(setLastName(''));
      dispatch(setNumber(''));
      dispatch(setVerificationCode(null));
      dispatch(setEmail(''));
      dispatch(setPassword(''));
      dispatch(setRepeatPassword(''));
      dispatch(setIsConflict(false));
      if (tempNumber !== '') {
        return;
      }
      dispatch(setType(ModalTypes.LOGIN));
    }, 300);
  };

  const generateTitle = () => {
    switch (type) {
      case ModalTypes.REGISTER:
        return 'Регистрация';
      case ModalTypes.RESET:
        return 'Восстановление пароля';
      case ModalTypes.INFORMATION:
        return 'Подтвердите E-mail';
      default:
        return 'Вход в личный кабинет';
    }
  };

  const handleSendButton = (type: ModalTypes) => {
    switch (type) {
      case ModalTypes.VERIFICATION:
        dispatch(setIsConflict(false));
        dispatch(setTempNumber(number));
        sendNumber(number, dispatch, isResendCodeButtonVisible);
        break;
      case ModalTypes.VERIFY:
        if (verificationCode) {
          sendVerificationCode(verificationCode)
            .then((data) => {
              dispatch(setUser(data.data.user));
              localStorage.setItem('refreshToken', data.data.refreshToken);
              dispatch(setIsSendingRequest(false));
              dispatch(setType(ModalTypes.REGISTER));
            })
            .catch(() => {
              dispatch(setIsSendingRequest(false));
              return dispatch(setIsConflict(true));
            });
        }
        break;
      case ModalTypes.REGISTER:
        sendUserData({ name, lastName, email, number: tempNumber, password })
          .then((data) => {
            dispatch(setUser(data.data.user));
            dispatch(setIsSendingRequest(false));
            dispatch(setIsAuthorizedUser(true));
            onClose();
          })
          .catch((err) => {
            dispatch(setIsSendingRequest(false));
            console.log(err);
            onClose();
          });
        break;
      case ModalTypes.INFORMATION:
        dispatch(closeModal());
        break;
      default:
        break;
    }
  };

  const generateForm = () => {
    switch (type) {
      case ModalTypes.VERIFICATION:
        return <ModalVerification />;
      case ModalTypes.VERIFY:
        return <ModalVerification />;
      case ModalTypes.REGISTER:
        return <ModalRegister />;
      case ModalTypes.RESET:
        return <ModalReset />;
      case ModalTypes.INFORMATION:
        return <ModalInformation />;
      default:
        return <ModalAuthorization />;
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
        <Button
          disabled={isSendingRequest || (!verificationCode && type === ModalTypes.VERIFY)}
          onClick={() => {
            if (type !== ModalTypes.INFORMATION) {
              dispatch(setIsSendingRequest(true));
            }
            handleSendButton(type);
          }}
          className={commonStyles['btn-order'] + ' ' + styles['btn-order_size']}>
          {isSendingRequest ? (
            <Spinner size="sm" />
          ) : type === ModalTypes.INFORMATION ? (
            'Ок'
          ) : (
            'Отправить'
          )}
        </Button>
      </ModalBootstrap.Footer>
    </ModalBootstrap>
  );
}
