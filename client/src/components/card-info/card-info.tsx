import styles from './card-info.module.css';
import { CardInfoProps } from './card-info.types';

export default function CardInfo({ title, paragraph_1, paragraph_2, paragraph_3 }: CardInfoProps) {
  return (
    <article className={styles['card-info']}>
      <h3 className={styles['card-info__title']}>{title}</h3>
      <p className={styles['card-info__paragraph']}>{paragraph_1}</p>
      <p className={styles['card-info__paragraph']}>{paragraph_2}</p>
      <p className={styles['card-info__paragraph']}>{paragraph_3}</p>
    </article>
  );
}
