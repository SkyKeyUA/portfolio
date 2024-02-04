import React from 'react';

import styles from './Social.module.scss';
import { IconsEnum, SvgIcon } from '../SvgIcon';
import Link from 'next/link';

export const SocialComponent = () => {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={`${styles.phone} ${styles.link}`}>
          <Link href={'tel:5877168483'}>
            <SvgIcon src={IconsEnum.phone} />
          </Link>
        </div>
        <div className={`${styles.email} ${styles.link}`}>
          <Link href={'mailto:veremiienkoov96@gmail.com'}>
            <SvgIcon src={IconsEnum.email} />
          </Link>
        </div>
        <div className={`${styles.linkedin} ${styles.link}`}>
          <Link href={'https://www.linkedin.com/in/oleksandr-veremiienko/'} target="_blank">
            <SvgIcon src={IconsEnum.linkedin} />
          </Link>
        </div>
        <div className={`${styles.facebook} ${styles.link}`}>
          <Link href={'https://www.facebook.com/profile.php?id=100005084326835'} target="_blank">
            <SvgIcon src={IconsEnum.facebook} />
          </Link>
        </div>
        <div className={`${styles.telegram} ${styles.link}`}>
          <Link href={'https://t.me/SkyKeyUA'} target="_blank">
            <SvgIcon src={IconsEnum.telegram} />
          </Link>
        </div>
        <div className={`${styles.github} ${styles.link}`}>
          <Link href={'https://github.com/SkyKeyUA'} target="_blank">
            <SvgIcon src={IconsEnum.github} />
          </Link>
        </div>
      </div>
    </div>
  );
};