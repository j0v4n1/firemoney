import styles from './receiving-methods.module.css';
import commonStyles from '../../styles/common.module.css';
import wallet from '../../images/wallet1.png';
import qiwi from '../../images/qiwi.png';
import visa from '../../images/visa.png';
import mastercard from '../../images/mastercard.png';
import cash from '../../images/cash.png';

export default function ReceivingMethods() {
  return (
    <section className={styles['receiving-methods']}>
      <h2 className={commonStyles['section-title']}>Способы получения</h2>
      <h3 className={styles['receiving-methods__title']}>На карту QIWI Yandex Деньги Наличные</h3>
      <ul className={styles['receiving-methods__list']}>
        <li className={styles['receiving-methods__list-item']}>
          <img className={styles['receiving-methods__img']} src={wallet} alt="" />
          <div className={styles['receiving-methods__img-arrow']}></div>
        </li>
        <li className={styles['receiving-methods__list-item']}>
          <img className={styles['receiving-methods__img']} src={qiwi} alt="" />
        </li>
        <li className={styles['receiving-methods__list-item']}>
          <img className={styles['receiving-methods__img']} src={visa} alt="" />
        </li>
        <li className={styles['receiving-methods__list-item']}>
          <img className={styles['receiving-methods__img']} src={mastercard} alt="" />
        </li>
        <li className={styles['receiving-methods__list-item']}>
          <img className={styles['receiving-methods__img']} src={cash} alt="" />
        </li>
      </ul>
      <button className={commonStyles['btn-order']}>Оформить заявку</button>
    </section>
  );
}
