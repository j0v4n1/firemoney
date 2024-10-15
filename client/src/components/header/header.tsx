import styles from './header.module.css';
import Navbar from '../navbar/navbar';
import Calculator from '../calculator/calculator';
import { NavbarPosition } from '../navbar/navbar.types';
import woman from '../../images/woman.png';

export default function Header() {
  const screenWidth = window.innerWidth;
  const imagePosition = (1920 - screenWidth) / 2;
  const right = 725 - imagePosition;
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
      <img style={{ right }} className={styles['header__image']} src={woman} alt="женщина-баннер" />
    </header>
  );
}
