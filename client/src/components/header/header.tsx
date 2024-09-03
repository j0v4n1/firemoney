import styles from './header.module.css';
import Navbar from '../navbar/navbar';
import Calculator from '../calculator/calculator';
import { NavbarPosition } from '../navbar/navbar.types';

export default function Header() {
  return (
    <header className={styles['header']}>
      <Navbar position={NavbarPosition.HEADER} />
      <div className={styles['header__info-container']}>
        <div className={styles['header__info']}>
          <div className={styles['header__info-title']}>
            <div className={styles['header__offer']}>Горячие предложения </div>
          </div>
          <h1 className={styles['header__title']}>быстрых займов по всей России! </h1>
          <p className={styles['header__subtitle']}>
            Без проверки кредитной истории. От 1 000 ₽ за 15 минут.
          </p>
          <p className={styles['header__warning']}>
            Внимание! Услуга обработки заявки платная и составляет от 98 ₽ до 398 ₽ раз в неделю
          </p>
        </div>
        <Calculator />
      </div>
    </header>
  );
}
