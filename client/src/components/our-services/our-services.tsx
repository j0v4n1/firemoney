import { cards } from '../../mocks/data';
import commonStyles from '../../styles/common.module.css';
import CardInfo from '../card-info/card-info';
import styles from './our-services.module.css';
export default function OurServices() {
  const cardList = cards.map(({ id, title, paragraph_1, paragraph_2, paragraph_3 }) => {
    return (
      <CardInfo
        key={id}
        title={title}
        paragraph_1={paragraph_1}
        paragraph_2={paragraph_2}
        paragraph_3={paragraph_3}
      />
    );
  });

  return (
    <section className={commonStyles['section-title'] + ' ' + styles['our-services']}>
      <h2 className={styles['our-services__title']}>О сервисе</h2>
      <div className={styles['our-services__cards-wrapper']}>{cardList}</div>
    </section>
  );
}
