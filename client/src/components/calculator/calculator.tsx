import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './calculator.module.css';
import commonStyles from '../../styles/common.module.css';
import React, { useState } from 'react';
import arrowsImage from '../../images/arrows.svg';
import { generateDate } from '../../utils';

export default function Calculator() {
  const [loan, setLoan] = useState<number | number[]>(1000);
  const [term, setTerm] = useState<number | number[]>(3);

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

  const percent = () => {
    return ((loan as number) / 100) * 2;
  };

  const totalPriceWithPercent = () => {
    if (typeof loan === 'number' && typeof term === 'number') {
      return loan + percent() * term;
    }
    return 0;
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
            setLoan(newValue);
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
            setTerm(newValue);
          }}
        />
        <div className={styles['calculator__range-info']}>
          <div>3</div>
          <div>30</div>
        </div>
        <button className={`${commonStyles['btn-order']} ${styles['btn-order_position']}`}>
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
            {totalPriceWithPercent().toLocaleString('fr-FR')} ₽
          </p>
          <h3 className={styles['calculator__total-title']}>Проценты в день</h3>
          <p className={styles['calculator__total-subtitle']}>
            {percent().toLocaleString('fr-FR')} ₽
          </p>
        </div>
      </div>
    </div>
  );
}
