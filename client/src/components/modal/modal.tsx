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
  setType,
} from '../../store/slices/modal/modal';
import { ModalTypes } from './modal.types';
import { sendPhoneNumber, sendVerificationCode } from '../../utils/api';
import ModalRegister from '../modal-register/modal-register';
import ModalVerification from '../modal-verification/modal-verification';
import ModalReset from '../modal-reset/modal-reset';
import ModalAuthorization from '../modal-authorization/modal-authorization';

export default function Modal() {
  const { isOpened, type, number, verificationCode, password, isConflict, isDataSending } = useAppSelector(
    (store) => store.modal
  );

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
      dispatch(setType(ModalTypes.LOGIN));
    }, 300);
  };

  const handleFormNumber = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = event.target.value;
    value = value.replace(/[^0-9]/g, '');
    if (!value.startsWith('7')) {
      value = '7' + value;
    }
    setNumber('+' + value);
  };
  const handleFormPassword = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(event.target.value);
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

  const handleSendButton = (type: ModalTypes) => {
    switch (type) {
      case ModalTypes.VERIFICATION:
        sendPhoneNumber(number)
          .then((data) => {
            if (data.data.status === 'failure') {
              setIsDataSending(false);
              return setIsConflict(true);
            }
            setIsDataSending(false);
            setType(ModalTypes.VERIFY);
            setNumber('');
            console.log(data.data);
          })
          .catch((error) => {
            setIsDataSending(false);
            console.log(error);
          });
        break;
      case ModalTypes.VERIFY:
        if (verificationCode) {
          sendVerificationCode(verificationCode)
            .then((data) => {
              if (data.data.status === 'failure') {
                setIsConflict(true);
              }
              setIsDataSending(false);
              setType(ModalTypes.REGISTER);
            })
            .catch((err) => console.log(err));
        }
        break;
      default:
        break;
    }
  };

  const generateForm = () => {
    switch (type) {
      case ModalTypes.VERIFICATION:
        return (
          <ModalVerification
            setNumber={setNumber}
            number={number}
            handleFormNumber={handleFormNumber}
            setType={setType}
            modalType={ModalTypes.VERIFICATION}
            isConflict={isConflict}
            setIsConflict={setIsConflict}
          />
        );
      case ModalTypes.VERIFY:
        return (
          <ModalVerification
            setNumber={setNumber}
            number={number}
            handleFormNumber={handleFormNumber}
            setType={setType}
            isConflict={isConflict}
            setIsConflict={setIsConflict}
            modalType={ModalTypes.VERIFY}
          />
        );
      case ModalTypes.REGISTER:
        return <ModalRegister setType={setType} />;
      case ModalTypes.RESET:
        return <ModalReset setType={setType} />;
      default:
        return (
          <ModalAuthorization
            setType={setType}
            password={password}
            number={number}
            handleFormNumber={handleFormNumber}
            handleFormPassword={handleFormPassword}
          />
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
        <ModalBootstrap.Title id="contained-modal-title-vcenter">{generateTitle()}</ModalBootstrap.Title>
      </ModalBootstrap.Header>
      <ModalBootstrap.Body>{generateForm()}</ModalBootstrap.Body>
      <ModalBootstrap.Footer>
        <Button
          disabled={isDataSending}
          onClick={() => {
            setIsDataSending(true);
            handleSendButton(type);
          }}
          className={commonStyles['btn-order'] + ' ' + styles['btn-order_size']}>
          {isDataSending ? <Spinner size="sm" /> : 'Отправить'}
        </Button>
      </ModalBootstrap.Footer>
    </ModalBootstrap>
  );
}
