import React from 'react';

import styles from './Experience.module.scss';
import { Feedback } from '../Feedback';

export const Experience: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={`${styles.container} small__container`}>
        <div className={`${styles.title} title`}>Professional Experience</div>
        <div className={styles.subtitle}>
          I excel in utilizing my front-end development skills to provide fast and effective client
          solutions. With expertise in HTML, CSS, and JavaScript, I can quickly understand client
          needs and implement innovative solutions that improve user experience and exceed
          expectations.
        </div>
      </div>
      <Feedback />
    </div>
  );
};
