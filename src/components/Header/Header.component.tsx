/** @format */

import React from 'react';

import styles from './Header.module.scss';
import Link from 'next/link';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';
import { SwitchThemeButton } from '@components/UI/Button';
import { Hamburger } from '@components/UI/Hamburger';

export const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Link href="https://www.linkedin.com/in/oleksandr-veremiienko/" target="_blank">
              <span>OLEKSANDR VEREMIIENKO</span>
            </Link>
          </div>
          <SwitchThemeButton />
        </div>
      </div>
    </header>
  );
};
