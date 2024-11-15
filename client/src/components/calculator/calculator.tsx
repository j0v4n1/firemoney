import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './calculator.module.css';
import commonStyles from '../../styles/common.module.css';
import React, { useEffect } from 'react';
import arrowsImage from '../../images/arrows.svg';
import { generateDate } from '../../utils/utils';
import {
  setLoan,
  setTerm,
  setPercent,
  setTotalPriceWithPercent,
} from '../../store/slices/calculator/calculator';
import { openModal, setType } from '../../store/slices/modal/modal';
import { useAppDispatch, useAppSelector } from '../../store/store.types';
import { ModalTypes } from '../modal/modal.types';

export default function Calculator() {
  const { loan, term, percent, totalPriceWithPercent } = useAppSelector(
    (state) => state.calculator
  );
  const { isAuthorizedUser } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const railStyle: React.CSSProperties = { height: 7 };
  const trackStyle: React.CSSProperties = {
    height: 7,
    background: 'linear-gradient(to right, #FFC83E, #FF9F47)',
  };
  const handleStyle: React.CSSProperties = {
    backgroundColor: '#FFA147',
    width: 21,
    height: 21,
    border: 'none',
    zIndex: 999,
    marginTop: '-7px',
    opacity: 1,
    backgroundImage: `url(${arrowsImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
  };

  const today = new Date();

  const calculatePercent = () => {
    return ((loan as number) / 100) * 2;
  };

  const calculateTotalPriceWithPercent = () => {
    if (typeof loan === 'number' && typeof term === 'number') {
      return loan + percent * term;
    }
    return 0;
  };

  useEffect(() => {
    dispatch(setPercent(calculatePercent()));
    dispatch(setTotalPriceWithPercent(calculateTotalPriceWithPercent()));
  }, [loan, term, percent]);

  const handleButtonClick = () => {
    if (isAuthorizedUser) {
      dispatch(setType(ModalTypes.LOAN_APPLICATION));
      return dispatch(openModal());
    }
    dispatch(setType(ModalTypes.LOGIN));
    return dispatch(openModal());
  };

  return (
    <div className={styles['calculator']}>
      <div className={styles['calculator__top']}>
        <h2 className={styles['calculator__title']}>Cумма кредита</h2>
        <div className={styles['thumb-block']}>{loan.toLocaleString('fr-FR')} ₽</div>
        <Slider
          styles={{ rail: railStyle, track: trackStyle, handle: handleStyle }}
          min={1000}
          max={100000}
          step={1000}
          value={loan}
          onChange={(newValue) => {
            dispatch(setLoan(newValue));
          }}
        />
        <div className={styles['calculator__range-info']}>
          <div>1 000 ₽</div>
          <div>100 000 ₽</div>
        </div>
        <h2 className={`${styles['calculator__title']} ${styles['calculator__title_mt']}`}>
          Cрок кредита
        </h2>
        <div className={styles['thumb-block']}>{term} дней</div>
        <Slider
          styles={{ rail: railStyle, track: trackStyle, handle: handleStyle }}
          min={3}
          max={30}
          step={1}
          value={term}
          onChange={(newValue) => {
            dispatch(setTerm(newValue));
          }}
        />
        <div className={styles['calculator__range-info']}>
          <div>3</div>
          <div>30</div>
        </div>
        <button
          onClick={handleButtonClick}
          className={`${commonStyles['btn-order']} ${styles['btn-order_position']}`}>
          Оформить заявку
        </button>
      </div>
      <div className={styles['calculator__bottom']}>
        <div className={styles['calculator__total-left']}>
          <h3 className={styles['calculator__total-title']}>Вы берете</h3>
          <p className={styles['calculator__total-subtitle']}>{loan.toLocaleString('fr-FR')} ₽</p>
          <h3 className={styles['calculator__total-title']}>Дата возврата</h3>
          <p className={styles['calculator__total-subtitle']}>
            {generateDate(today, term as number)}
          </p>
        </div>
        <div className={styles['calculator__total-right']}>
          <h3 className={styles['calculator__total-title']}>К возврату</h3>
          <p className={styles['calculator__total-subtitle']}>
            {totalPriceWithPercent.toLocaleString('fr-FR')} ₽
          </p>
          <h3 className={styles['calculator__total-title']}>Проценты в день</h3>
          <p className={styles['calculator__total-subtitle']}>
            {percent.toLocaleString('fr-FR')} ₽
          </p>
        </div>
      </div>
    </div>
  );
}
