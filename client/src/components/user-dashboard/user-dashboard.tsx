import { Outlet } from 'react-router-dom';
import styles from './user-dashboard.module.css';

export default function UserDashboard() {
  return (
    <section className={styles['dashboard']}>
      <Outlet />
    </section>
  );
}
