import React from 'react';

import styles from './Skills.module.scss';
import { SkillsItems } from './Skills.constants';

export const Skills: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={`${styles.container} small__container`}>
        <div className={`${styles.title} title`}>Skills</div>
        {SkillsItems.map(({ category, skills }) => (
          <div key={category} className={styles.body}>
            <span className={styles.subtitle}>{category}: </span>
            {skills}
          </div>
        ))}
      </div>
    </div>
  );
};
