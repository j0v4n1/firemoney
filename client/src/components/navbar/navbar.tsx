import { NavbarProps, NavbarType } from './navbar.types';
import NavbarMain from '../navbar-main/navbar-main';
import NavbarDashboard from '../navbar-dashboard/navbar-dashboard';

export default function Navbar({ position, type }: NavbarProps) {
  const renderNavbarByType = () => {
    switch (type) {
      case NavbarType.MAIN:
        return <NavbarMain position={position} />;
      case NavbarType.DASHBOARD:
        return <NavbarDashboard />;
      default:
        return <></>;
    }
  };

  return renderNavbarByType();
}
