import React from 'react';

import styles from './Feedback.module.scss';
import { FeedbackItems } from './Feedback.constants';
import { FeedbackSlider } from './FeedbackSlider';

export const Feedback: React.FC = () => {
  return <FeedbackSlider items={FeedbackItems} />;
};
