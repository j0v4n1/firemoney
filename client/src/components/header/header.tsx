import styles from './header.module.css';
import Navbar from '../navbar/navbar';
import { NavbarPosition } from '../navbar/navbar.types';
import HeaderContainer from '../header-container/header-container';
import { HeaderProps } from './header.types';
import { useLocation } from 'react-router-dom';

export default function Header({ type }: HeaderProps) {
  const location = useLocation();

  return (
    <header className={styles['header']}>
      <Navbar position={NavbarPosition.HEADER} type={type} />
      {location.pathname === '/' && <HeaderContainer />}
    </header>
  );
}
