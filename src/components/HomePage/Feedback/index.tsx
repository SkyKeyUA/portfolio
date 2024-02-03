import React from 'react';

import styles from './Feedback.module.scss';
import { FeedbackItems } from './Feedback.constants';
import { Slider } from './Slider';

export const Feedback: React.FC = () => {
  return (
    <>
      <div className={`${styles.container} small__container`}>
        <div className={`${styles.title} title`}>customer feedback</div>
      </div>
      <div className={styles.swiper}>
        <Slider items={FeedbackItems} />
      </div>
    </>
  );
};
