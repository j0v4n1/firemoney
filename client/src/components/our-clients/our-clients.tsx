import commonStyles from '../../styles/common.module.css';
import styles from './our-clients.module.css';
import x from '../../images/X.svg';
import plus from '../../images/plus.svg';
import download from '../../images/download.svg';
import location from '../../images/location.svg';

export default function OurClients() {
  return (
    <section className={styles['our-clients']}>
      <h2 className={commonStyles['section-title'] + ' ' + styles['our-clients__title']}>
        Наши клиенты
      </h2>
      <ul className={styles['our-clients__list']}>
        <li className={`${styles['our-clients__list-item']} ${commonStyles['box']}`}>
          <img className={styles['our-clients__img']} src={x} alt="" />
          <div className={styles['our-clients__client-wrpapper']}>
            <h3 className={styles['our-clients__name']}>Екатерина Романова</h3>
            <p className={styles['our-clients__text']}>Получила отказ 45 сек назад</p>
            <div className={styles['our-clients__city-wrapper']}>
              <img className={styles['our-clients__city-img']} src={location} alt="" />
              <span className={styles['our-clients__city']}>г. Санкт-Петербург</span>
            </div>
          </div>
        </li>
        <li className={`${styles['our-clients__list-item']} ${commonStyles['box']}`}>
          <img className={styles['our-clients__img']} src={plus} alt="" />
          <div className={styles['our-clients__client-wrpapper']}>
            <h3 className={styles['our-clients__name']}>Игорь Николаев</h3>
            <p className={styles['our-clients__text']}>Взял 5 000 ₽ 2 мин назад</p>
            <div className={styles['our-clients__city-wrapper']}>
              <img className={styles['our-clients__city-img']} src={location} alt="" />
              <span className={styles['our-clients__city']}>г. Самара</span>
            </div>
          </div>
        </li>
        <li className={`${styles['our-clients__list-item']} ${commonStyles['box']}`}>
          <img className={styles['our-clients__img']} src={download} alt="" />
          <div className={styles['our-clients__client-wrpapper']}>
            <h3 className={styles['our-clients__name']}>Светлана Борисовна</h3>
            <p className={styles['our-clients__text']}>Внес на счет 12 000 ₽ 45 сек назад</p>
            <div className={styles['our-clients__city-wrapper']}>
              <img className={styles['our-clients__city-img']} src={location} alt="" />
              <span className={styles['our-clients__city']}>г. Москва</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
