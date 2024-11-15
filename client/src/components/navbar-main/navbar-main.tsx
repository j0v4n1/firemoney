import { NavbarPosition, NavbarProps } from '../navbar/navbar.types';
import styles from '../navbar/navbar.module.css';
import { useAppDispatch, useAppSelector } from '../../store/store.types';
import { openModal } from '../../store/slices/modal/modal';
import { NavLink } from 'react-router-dom';

export default function NavbarMain({ position }: NavbarProps) {
  const dispatch = useAppDispatch();
  const onOpen = () => dispatch(openModal());
  const { isAuthorizedUser, name, lastName } = useAppSelector((state) => state.user);

  return (
    <div
      className={
        position === NavbarPosition.HEADER
          ? styles['navbar']
          : `${styles['navbar']} ${styles['navbar_footer']}`
      }>
      <div className={styles['logo']}>
        <span className={styles['logo__fire-word']}>Fire</span>
        <span className={styles['logo__money-word']}>Money</span>
      </div>
      <nav className={styles['nav-menu']}>
        <ul className={styles['nav-menu__list']}>
          <li>
            <a className={styles['nav-menu__link']} href="#reasons">
              Почему мы?
            </a>
          </li>
          <li>
            <a className={styles['nav-menu__link']} href="#service">
              О сервисе
            </a>
          </li>
          <li>
            <a className={styles['nav-menu__link']} href="#faq">
              Вопросы-ответы
            </a>
          </li>
        </ul>
      </nav>
      {position === NavbarPosition.HEADER ? (
        isAuthorizedUser ? (
          <NavLink
            to={'/dashboard/personal'}
            type="button"
            className={`${styles['nav-menu__button']} ${styles['nav-menu__button_underline']}`}>
            {`${name} ${lastName}`}
          </NavLink>
        ) : (
          <button onClick={onOpen} type="button" className={styles['nav-menu__button']}>
            вход в личный кабинет
          </button>
        )
      ) : (
        <div className={styles['nav-menu__contacts']}>
          <span className={styles['nav-menu__email']}>Kustohelp@gmail.com</span>
          <span className={styles['nav-menu__phone']}>8 800 808-00-80</span>
        </div>
      )}
    </div>
  );
}
