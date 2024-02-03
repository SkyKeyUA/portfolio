import React from 'react';

import styles from './CurrentProjects.module.scss';
import { Slider } from '@components/UI/Slider';
import { CurrentProjectsItems } from './CurrentProjects.constants';

export const CurrentProjects: React.FC = () => {
  return <Slider items={CurrentProjectsItems.items} title={CurrentProjectsItems.title} />;
};
