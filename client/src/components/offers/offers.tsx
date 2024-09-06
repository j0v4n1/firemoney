import styles from './offers.module.css';
import commonStyles from '../../styles/common.module.css';

export default function Offers() {
  return (
    <section className={styles['offers']}>
      <h2 className={`${commonStyles['section-title']} ${styles['section-title_mb']}`}>
        Лучшие предложения
      </h2>
      <ul className={styles['offers__list']}>
        <li className={`${styles['offers__list-item']} ${commonStyles['box']}`}>
          <div className={styles['offers__line']}>lite</div>
          <h3 className={styles['offers__list-item-title']}>
            <span style={{ color: '#FFC83E' }}>15 000 ₽ </span> на{' '}
            <span style={{ color: '#FFC83E' }}>7</span> дней
          </h3>
          <p className={styles['offers__list-item-subtitle']}>
            <span style={{ fontWeight: 300 }}>Дата возврата:</span> 12 января 2022
          </p>
          <p className={styles['offers__list-item-subtitle']}>
            <span style={{ fontWeight: 300 }}>К возврату:</span> 17 100 ₽
          </p>
        </li>
        <li className={`${styles['offers__list-item']} ${commonStyles['box']}`}>
          <div className={`${styles['offers__line']} ${styles['offers__line_basic-color']}`}>
            basic
          </div>
          <h3 className={styles['offers__list-item-title']}>
            <span style={{ color: '#FF7B00' }}>25 000 ₽</span> на{' '}
            <span style={{ color: '#FF7B00' }}>1</span> месяц
          </h3>
          <p className={styles['offers__list-item-subtitle']}>
            <span style={{ fontWeight: 300 }}>Дата возврата:</span> 12 января 2022
          </p>
          <p className={styles['offers__list-item-subtitle']}>
            <span style={{ fontWeight: 300 }}>К возврату:</span> 40 000 ₽
          </p>
        </li>
        <li className={`${styles['offers__list-item']} ${commonStyles['box']}`}>
          <div className={`${styles['offers__line']} ${styles['offers__line_pro-color']}`}>pro</div>
          <h3 className={styles['offers__list-item-title']}>
            <span style={{ color: '#FA5914' }}>45 000 ₽</span> на{' '}
            <span style={{ color: '#FA5914' }}>1</span> год
          </h3>
          <p className={styles['offers__list-item-subtitle']}>
            <span style={{ fontWeight: 300 }}>Дата возврата:</span> 12 января 2022
          </p>
          <p className={styles['offers__list-item-subtitle']}>
            <span style={{ fontWeight: 300 }}>К возврату:</span> 58 500 ₽
          </p>
        </li>
      </ul>
      <p className={styles['offers__footnote']}>
        * Расчёт не является публичное офертой и может отличаться от реальной ставки кредитора
      </p>
    </section>
  );
}
