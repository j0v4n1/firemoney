import styles from './navbar.module.css';
import { NavbarPosition, NavbarProps } from './navbar.types';

export default function Navbar({ position }: NavbarProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['logo']}>
        <span className={styles['logo__fire-word']}>Fire</span>
        <span className={styles['logo__money-word']}>Money</span>
      </div>
      <nav className={styles['nav-menu']}>
        <ul className={styles['nav-menu__list']}>
          <li>
            <a className={styles['nav-menu__link']} href="#">
              Почему мы?
            </a>
          </li>
          <li>
            <a className={styles['nav-menu__link']} href="#">
              О сервисе
            </a>
          </li>
          <li>
            <a className={styles['nav-menu__link']} href="#">
              Вопросы-ответы
            </a>
          </li>
        </ul>
      </nav>
      {position === NavbarPosition.HEADER ? (
        <button className={styles['nav-menu__button']}>вход в личный кабинет</button>
      ) : (
        <div className={styles['nav-menu__contacts']}>
          <span className={styles['nav-menu__email']}>Kustohelp@gmail.com</span>
          <span className={styles['nav-menu__phone']}>8 800 808-00-80</span>
        </div>
      )}
    </div>
  );
}
