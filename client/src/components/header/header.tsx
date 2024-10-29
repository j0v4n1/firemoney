import styles from './header.module.css';
import Navbar from '../navbar/navbar';
import { NavbarPosition } from '../navbar/navbar.types';
import HeaderContainer from '../header-container/header-container';
import UserDashboard from '../user-dashboard/user-dashboard';
import { HeaderProps } from './header.types';

export default function Header({ type }: HeaderProps) {
  return (
    <header className={styles['header']}>
      <Navbar position={NavbarPosition.HEADER} type={type} />
      <HeaderContainer />
      {/*<UserDashboard />*/}
    </header>
  );
}
