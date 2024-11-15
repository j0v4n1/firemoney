import styles from './dashboard-loans.module.css';
import commonStyles from '../../styles/common.module.css';

export default function DashboardLoans() {
  return (
    <div className={styles['dashboard__loan-info']}>
      <h2 className={`${commonStyles['section-title']} ${styles['dashboard__title']}`}>
        Ваши займы
      </h2>
      <p className={styles['dashboard__loan-paragraph']}>
        У Вас пока нет займов. После оформления заявки, они появятся здесь.
      </p>
    </div>
  );
}
