/** @format */

import React from 'react';

import styles from './Card.module.scss';
import { CardProps } from './Card.types';
import Link from 'next/link';

export const Card: React.FC<CardProps> = ({ image, layoutLink, codeLink, title, text }) => {
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        {image && <img className={styles.image} src={image} alt="" />}
        {layoutLink && (
          <Link className={`${styles.layout} ${styles.link}`} href={layoutLink} target="_blank">
            <span>UpWork</span>
          </Link>
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
      </div>
      {title && <div className={styles.title}>{title}</div>}
      {text && (
        <div className={styles.text}>
          <span>Tech stack: </span>
          {text}
        </div>
      )}
    </div>
  );
};
