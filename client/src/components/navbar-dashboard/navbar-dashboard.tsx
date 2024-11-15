import styles from '../navbar/navbar.module.css';
import { NavLink } from 'react-router-dom';

export default function NavbarDashboard() {
  return (
    <div className={`${styles['navbar']} ${styles['navbar_dashboard']}`}>
      <div className={styles['logo']}>
        <span className={styles['logo__fire-word']}>Fire</span>
        <span className={styles['logo__money-word']}>Money</span>
      </div>
      <nav className={styles['nav-menu']}>
        <ul className={styles['nav-menu__list']}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles['nav-menu__link']} ${styles['nav-menu__link_active']}`
                  : styles['nav-menu__link']
              }
              to="personal">
              Личные данные
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles['nav-menu__link']} ${styles['nav-menu__link_active']}`
                  : styles['nav-menu__link']
              }
              to="loans">
              Займы
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles['nav-menu__link']} ${styles['nav-menu__link_active']}`
                  : styles['nav-menu__link']
              }
              to="settings">
              Настройки
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink
        to={'/'}
        type="button"
        className={`${styles['nav-menu__button']} ${styles['nav-menu__button_underline']}`}>
        вернуться на сайт
      </NavLink>
    </div>
  );
}
