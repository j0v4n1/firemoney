export const enum NavbarPosition {
  HEADER = 'header',
  FOOTER = 'footer',
}

export const enum NavbarType {
  MAIN = 'main',
  DASHBOARD = 'dashboard',
}

export type NavbarProps = {
  position: NavbarPosition;
  type?: NavbarType;
};
