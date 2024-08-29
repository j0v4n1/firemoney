import styles from './navbar.module.css';

export default function Navbar() {
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
      <button className={styles['nav-menu__button']}>вход в личный кабинет</button>
    </div>
  );
}
