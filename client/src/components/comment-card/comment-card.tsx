import styles from './comment-card.module.css';
import commonStyles from '../../styles/common.module.css';
import { CommentCardProps } from './comment-card.types';

export default function CommentCard({ author, city, img, text }: CommentCardProps) {
  return (
    <li className={`${styles['comment']} ${commonStyles['box']}`}>
      <img className={styles['comment__img']} src={img} alt="Аватар" />
      <h3 className={styles['comment__title']}>{author}</h3>
      <p className={styles['comment__city']}>{city}</p>
      <p className={styles['comment__text']}>{text}</p>
      <div className={styles['comment__rate']}>
        <div className={styles['comment__rate-star']}></div>
        <div className={styles['comment__rate-star']}></div>
        <div className={styles['comment__rate-star']}></div>
        <div className={styles['comment__rate-star']}></div>
        <div className={styles['comment__rate-star']}></div>
      </div>
    </li>
  );
}
