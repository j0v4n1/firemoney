import { openModal } from '../../store/slices/modal/modal';
import { useAppDispatch } from '../../store/store.types';
import Modal from '../modal/modal';
import styles from './navbar.module.css';
import { NavbarPosition, NavbarProps } from './navbar.types';

export default function Navbar({ position }: NavbarProps) {
  const dispatch = useAppDispatch();

  const onOpen = () => dispatch(openModal());

  return (
    <>
      <div className={styles['navbar']}>
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
          <button onClick={onOpen} type="button" className={styles['nav-menu__button']}>
            вход в личный кабинет
          </button>
        ) : (
          <div className={styles['nav-menu__contacts']}>
            <span className={styles['nav-menu__email']}>Kustohelp@gmail.com</span>
            <span className={styles['nav-menu__phone']}>8 800 808-00-80</span>
          </div>
        )}
      </div>
    </>
  );
}
