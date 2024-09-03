import styles from '../offers/offers.module.css';

export default function ReasonsToChoose() {
  return (
    <section className={`${styles['article']} ${styles['reasons-to-choose']}`}>
      <h2>Почему выбирают нас</h2>
      <ul>
        <li>
          <div className={styles['comment']}>
            <img className={styles['comment__img']} src="" alt="" />
            <h3 className={styles['comment__title']}>Екатерина Романова, 26 лет</h3>
            <p className={styles['comment__city']}>г. Москва</p>
            <p className={styles['comment__subtitle']}>
              Для того, чтобы воспользоваться услугой, вам необходимо лишь заполнить анкету на
              сайте, все остальное сервис сделает за вас, сэкономив вам большое количество времени и
              сил. Наш сервис работает со всеми клиентами, нам не важно, какая у вас кредитная
              история и имеются ли текущие просрочки.
            </p>
            <div className={styles['comment__rate']}></div>
          </div>
        </li>
        <li>
          <div className={styles['comment']}>
            <img className={styles['comment__img']} src="" alt="" />
            <h3 className={styles['comment__title']}>Екатерина Романова, 26 лет</h3>
            <p className={styles['comment__city']}>г. Москва</p>
            <p className={styles['comment__subtitle']}>
              Для того, чтобы воспользоваться услугой, вам необходимо лишь заполнить анкету на
              сайте, все остальное сервис сделает за вас, сэкономив вам большое количество времени и
              сил. Наш сервис работает со всеми клиентами, нам не важно, какая у вас кредитная
            </p>
            <div className={styles['comment__rate']}></div>
          </div>
        </li>
        <li>
          <div className={styles['comment']}>
            <img className={styles['comment__img']} src="" alt="" />
            <h3 className={styles['comment__title']}>Екатерина Романова, 26 лет</h3>
            <p className={styles['comment__city']}>г. Москва</p>
            <p className={styles['comment__subtitle']}>
              Для того, чтобы воспользоваться услугой, вам необходимо лишь заполнить анкету на
              сайте, все остальное сервис сделает за вас, сэкономив вам большое количество времени и
              сил. Наш сервис работает со всеми клиентами, нам не важно, какая у вас кредитная
              история и имеются ли текущие просрочки.
            </p>
            <div className={styles['comment__rate']}></div>
          </div>
        </li>
      </ul>
      <div>
        <button>Оформить заявку</button>
        <button>Все отзывы</button>
      </div>
    </section>
  );
}
