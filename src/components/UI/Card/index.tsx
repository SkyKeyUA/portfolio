/** @format */

import React from 'react';

import styles from './Card.module.scss';
import { CardProps } from './Card.types';
import Link from 'next/link';
import Image from 'next/image';

export const Card: React.FC<CardProps> = ({ image, layoutLink, codeLink, projectTitle, text }) => {
  return (
    <div className={styles.root}>
      {image && <Image width={1570} height={780} className={styles.image} src={image} alt="" />}
      {layoutLink ? (
        <Link className={`${styles.layout} ${styles.link}`} href={layoutLink} target="_blank">
          <span>Layout</span>
        </Link>
      ) : (
        <div className={`${styles.layout} ${styles.link} ${styles.server}`}>
          <span>Need Server</span>
        </div>
      )}
      {codeLink ? (
        <Link className={`${styles.code} ${styles.link}`} href={codeLink} target="_blank">
          <span>Code</span>
        </Link>
      ) : (
        <div className={`${styles.code} ${styles.link}`}>
          <span>NDA</span>
        </div>
      )}
      {projectTitle && (
        <div className={`${styles.title} title`}>
          {layoutLink ? (
            <Link className={styles.layoutLink} href={layoutLink} target="_blank">
              {projectTitle}
            </Link>
          ) : (
            projectTitle
          )}
        </div>
      )}
      {text && (
        <div className={styles.text}>
          <span>Tech stack: </span>
          {text}
        </div>
      )}
    </div>
  );
};
