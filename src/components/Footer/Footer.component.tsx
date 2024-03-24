/** @format */

import React from 'react';
import styles from './Footer.module.scss';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';

export const FooterComponent: React.FC = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div id="phone" className={`${styles.phone} ${styles.link}`}>
            <span>
              <SvgIcon src={IconsEnum.phone} />
              5877168483
            </span>
          </div>
          <div id="email" className={`${styles.email} ${styles.link}`}>
            <span>
              <SvgIcon src={IconsEnum.email} />
              veremiienkoov96@gmail.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
