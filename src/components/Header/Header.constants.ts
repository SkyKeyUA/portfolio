type MenuItem = {
  menu: string;
  submenu?: string[];
};

export const menuItems: MenuItem[] = [
  {
    menu: 'About Us',
  },
  {
    menu: 'Article',
  },
  {
    menu: 'Property',
    submenu: ['House', 'Villa', 'Apartment'],
  },
];
