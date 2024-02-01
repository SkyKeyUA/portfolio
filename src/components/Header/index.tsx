/** @format */

import React from 'react';

import styles from './Header.module.scss';
import Link from 'next/link';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';
import { SwitchThemeButton } from '@components/UI/Button';
import { Hamburger } from '@components/UI/Hamburger';
import { menuItems } from './Header.constants';

export const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = open ? `${styles.menu__link_arrow} ${styles.open}` : styles.menu__link_arrow;
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className={styles.logo}>
            <Link href="/">
              <SvgIcon size={36} src={IconsEnum.logo} />
              <span>Hounter</span>
            </Link>
          </div>
          <div className={styles.body}>
            <nav className={styles.menu}>
              <ul className={`${styles.menu__list} ${menuOpen ? styles.open__list : ''}`}>
                {menuItems.map((obj, index) => (
                  <li className={obj.submenu ? toggleMenu : styles.menu__link} key={index}>
                    {obj.submenu ? (
                      <>
                        <span onClick={() => setOpen(!open)}>{obj.menu}</span>
                        <SvgIcon
                          size={18}
                          src={IconsEnum.info}
                          className={open ? `${styles.arrow} ${styles.arrow_open}` : styles.arrow}
                          onClick={() => setOpen(!open)}
                        />
                        <ul
                          className={
                            open ? `${styles.submenu__list} ${styles.open}` : styles.submenu__list
                          }>
                          {obj.submenu.map((subObj, subIndex) => (
                            <li className={styles.submenu__link} key={subIndex}>
                              <Link href="/">{subObj}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link href="/">{obj.menu}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <SwitchThemeButton />
            <button style={{ marginLeft: '15px' }} className={styles.menu__btn}>
              Sign Up!
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
