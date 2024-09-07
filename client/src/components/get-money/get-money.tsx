import styles from './get-money.module.css';
import commonStyles from '../../styles/common.module.css';
import woman from '../../images/woman2.png';
import rounds from '../../images/rounds.png';

export default function GetMoney() {
  return (
    <section className={styles['get-money']}>
      <div className={styles['get-money__article-wrapper']}>
        <article className={styles['get-money__article']}>
          <h2 className={commonStyles['section-title']}>Получи деньги здесь и сейчас</h2>
          <p className={styles['get-money__subtitle']}>
            Без проверки кредитной истории. От 1 000 ₽ за 15 минут.
          </p>
          <button className={commonStyles['btn-order']}>Оформить заявку</button>
        </article>
        <img className={styles['get-money__img']} src={woman} alt="" />
        <img
          className={styles['get-money__img'] + ' ' + styles['get-money__img_position']}
          src={rounds}
          alt=""
        />
      </div>
    </section>
  );
}
