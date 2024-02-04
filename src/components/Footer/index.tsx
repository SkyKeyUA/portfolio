/** @format */

import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={`${styles.phone} ${styles.link}`}>
            <Link href={'tel:5877168483'}>
              <SvgIcon src={IconsEnum.phone} />
              5877168483
            </Link>
          </div>
          <div className={`${styles.email} ${styles.link}`}>
            <Link href={'mailto:veremiienkoov96@gmail.com'}>
              <SvgIcon src={IconsEnum.email} />
              veremiienkoov96@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
