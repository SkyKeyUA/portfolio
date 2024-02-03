/** @format */

import React from 'react';

import styles from './Card.module.scss';
import { CardProps } from './Card.types';
import Link from 'next/link';

export const Card: React.FC<CardProps> = ({ image, layoutLink, codeLink, projectTitle, text }) => {
  return (
    <div className={styles.root}>
      {image && <img className={styles.image} src={image} alt="" />}
      {layoutLink && (
        <Link className={`${styles.layout} ${styles.link}`} href={layoutLink} target="_blank">
          <span>Layout</span>
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
      {projectTitle && <div className={`${styles.title} title`}>{projectTitle}</div>}
      {text && (
        <div className={styles.text}>
          <span>Tech stack: </span>
          {text}
        </div>
      )}
    </div>
  );
};
