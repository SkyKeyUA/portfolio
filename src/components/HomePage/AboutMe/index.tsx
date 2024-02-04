import React from 'react';

import styles from './AboutMe.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const AboutMe: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={`${styles.container} small__container`}>
        <div className={styles.image}>
          <Link href="https://www.linkedin.com/in/oleksandr-veremiienko/" target="_blank">
            <Image width={480} height={480} src="/images/aboutMe/1.png" alt="" />
          </Link>
        </div>
        <div className={styles.info}>
          <h1>My name is Oleksandr Veremiienko.</h1>
          <p> I am a Full-Stack Developer with strong knowledge of React and TypeScript.</p>
          <p>
            I offer 3 years of hands-on experience designing, developing, shipping, and maintaining
            large-scale products where availability, performance and security are paramount. I have
            established myself as a versatile software engineer who enthusiastically takes on new
            problems across the full-stack.
          </p>
        </div>
      </div>
    </div>
  );
};
