import styles from './reasons-to-choose.module.css';
import commonStyles from '../../styles/common.module.css';
import CommentCard from '../comment-card/comment-card';
import { comments } from '../../mocks/data';

export default function ReasonsToChoose() {
  const commentList = comments.map(({ id, author, city, img, text }) => {
    return <CommentCard key={id} author={author} city={city} img={img} text={text} />;
  });

  return (
    <section className={styles['reasons-to-choose']}>
      <h2 className={commonStyles['section-title']}>Почему выбирают нас</h2>
      <ul className={styles['reasons-to-choose__list']}>{commentList}</ul>
      <div className={styles['reasons-to-choose__btn-wrapper']}>
        <button className={commonStyles['btn-order']}>Оформить заявку</button>
        <button className={`${commonStyles['btn-order']} ${styles['btn-order_color']}`}>
          Все отзывы
        </button>
      </div>
    </section>
  );
}
