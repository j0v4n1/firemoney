import styles from './money-guide.module.css';
import commonStyles from '../../styles/common.module.css';
import hand from '../../images/hand.svg';
import paper from '../../images/paper.svg';
import man from '../../images/man.svg';
import wallet from '../../images/wallet.svg';

export default function MoneyGuide() {
  return (
    <section className={styles['money-guide']}>
      <div className={styles['money-guide__line']}></div>
      <h2 className={`${commonStyles['section-title']} ${styles['section-title_mb']}`}>
        Как получить деньги
      </h2>
      <ul className={styles['money-guide__list']}>
        <li className={styles['money-guide__list-item']}>
          <figure className={styles['money-guide__card']}>
            <img className={styles['money-guide__card-img']} src={hand} alt="" />
            <div className={styles['money-guide__card-line-wrapper']}>
              <div
                className={`${styles['money-guide__card-line-round']} ${styles['money-guide__card-line-round_color']}`}>
                1
              </div>
              <div
                className={`${styles['money-guide__card-line']} ${styles['money-guide__card-line_linear']}`}></div>
              <div className={styles['money-guide__card-line']}></div>
            </div>
            <figcaption className={styles['money-guide__card-text']}>
              Выберите сумму займа
            </figcaption>
          </figure>
        </li>
        <li className={styles['money-guide__list-item']}>
          <figure className={styles['money-guide__card']}>
            <img className={styles['money-guide__card-img']} src={paper} alt="" />
            <div className={styles['money-guide__card-line']}>
              <div className={styles['money-guide__card-line-round']}>2</div>
            </div>
            <figcaption className={styles['money-guide__card-text']}>Заполните анкету</figcaption>
          </figure>
        </li>
        <li className={styles['money-guide__list-item']}>
          <figure className={styles['money-guide__card']}>
            <img className={styles['money-guide__card-img']} src={man} alt="" />
            <div className={styles['money-guide__card-line']}>
              <div className={styles['money-guide__card-line-round']}>3</div>
            </div>
            <figcaption className={styles['money-guide__card-text']}>
              Дождитесь рассмотрения заявки
            </figcaption>
          </figure>
        </li>
        <li className={styles['money-guide__list-item']}>
          <figure className={styles['money-guide__card']}>
            <img className={styles['money-guide__card-img']} src={wallet} alt="" />
            <div className={styles['money-guide__card-line']}>
              <div className={styles['money-guide__card-line-round']}>4</div>
            </div>
            <figcaption className={styles['money-guide__card-text']}>
              Получите деньги любым удобным способом
            </figcaption>
          </figure>
        </li>
      </ul>
      <button className={`${commonStyles['btn-order']} ${styles['money-guide__button']}`}>
        Оформить заявку
      </button>
    </section>
  );
}
