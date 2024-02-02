import React from 'react';

import styles from './Feedback.module.scss';

export const Feedback: React.FC = () => {
  return (
    <div className={`${styles.container} small__container`}>
      <div className={`${styles.title} title`}>customer feedback</div>
    </div>
  );
};
