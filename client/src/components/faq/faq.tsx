import Accordion from '../accordion/accordion';
import styles from './faq.module.css';
import commonStyles from '../../styles/common.module.css';

export default function Faq() {
  return (
    <section className={styles['faq']}>
      <h2 className={commonStyles['section-title']}>Вопросы-ответы</h2>
      <Accordion />
    </section>
  );
}
