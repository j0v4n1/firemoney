import commonStyles from '../../styles/common.module.css';
import styles from './our-clients.module.css';

export default function OurClients() {
  return (
    <section className={styles['our-clients']}>
      <h2 className={commonStyles['section-title']}>Наши клиенты</h2>
      <ul className={styles['our-clients__list']}>
        <li className={styles['our-clients__list-item']}>
          <img className={styles['our-clients__img ']} src="" alt="" />
          <h3 className={styles['our-clients__name']}>Екатерина Романова</h3>
          <p className={styles['our-clients__text']}>Получила отказ 45 сек назад</p>
          <span className={styles['our-clients__city']}>г. Москва</span>
        </li>
        <li className={styles['our-clients__list-item']}>
          <img className={styles['our-clients__img ']} src="" alt="" />
          <h3 className={styles['our-clients__name']}>Игорь Николаев</h3>
          <p className={styles['our-clients__text']}>Взял 5 000 ₽ 2 мин назад</p>
          <span className={styles['our-clients__city']}>г. Москва</span>
        </li>
        <li className={styles['our-clients__list-item']}>
          <img className={styles['our-clients__img ']} src="" alt="" />
          <h3 className={styles['our-clients__name']}>Светлана Борисовна</h3>
          <p className={styles['our-clients__text']}>Внес на счет 12 000 ₽ 45 сек назад</p>
          <span className={styles['our-clients__city']}>г. Москва</span>
        </li>
      </ul>
    </section>
  );
}
