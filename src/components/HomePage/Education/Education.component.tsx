import React from 'react';

import styles from './Education.module.scss';
import { EducationProps } from './Education.types';
import { EducationItems } from './Education.constants';

export const EducationComponent: React.FC<EducationProps> = () => {
  const { title, education, training } = EducationItems;
  return (
    <div className={styles.root}>
      <div className={`${styles.container} small__container`}>
        {title && <div className={`${styles.title} title`}>{title}</div>}
        {training &&
          training.map((text) => (
            <div key={text} className={styles.subtitle}>
              {text}
            </div>
          ))}
        {education &&
          education.map((text) => (
            <div key={text} className={styles.subtitle}>
              {text}
            </div>
          ))}
      </div>
    </div>
  );
};
