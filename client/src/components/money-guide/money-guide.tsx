import styles from '../offers/offers.module.css';

export default function MoneyGuide() {
  return (
    <section className={`${styles['article']} ${styles['money-guide']}`}>
      <h2 className={styles['money-guide__title']}>Как получить деньги</h2>
      <ul className={styles['money-guide__list']}>
        <li className={styles['money-guide__list-item']}>
          <figure className={styles['money-guide__card']}>
            <img className={styles['money-guide__card-img']} src="" alt="" />
            <figcaption className={styles['money-guide__card-text']}>
              Выберите сумму займа
            </figcaption>
          </figure>
        </li>
        <li className={styles['money-guide__list-item']}>
          <figure className={styles['money-guide__card']}>
            <img className={styles['money-guide__card-img']} src="" alt="" />
            <figcaption className={styles['money-guide__card-text']}>Заполните анкету</figcaption>
          </figure>
        </li>
        <li className={styles['money-guide__list-item']}>
          <figure className={styles['money-guide__card']}>
            <img className={styles['money-guide__card-img']} src="" alt="" />
            <figcaption className={styles['money-guide__card-text']}>
              Дождитесь рассмотрения заявки
            </figcaption>
          </figure>
        </li>
        <li className={styles['money-guide__list-item']}>
          <figure className={styles['money-guide__card']}>
            <img className={styles['money-guide__card-img']} src="" alt="" />
            <figcaption className={styles['money-guide__card-text']}>
              Получите деньги любым удобным способом
            </figcaption>
          </figure>
        </li>
      </ul>
      <button className={`${styles['button']} ${styles['money-guide__button']}`}>
        Оформить заявку
      </button>
    </section>
  );
}
