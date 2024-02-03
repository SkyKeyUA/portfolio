import React from 'react';

import styles from './RecentlyCompletedProjects.module.scss';
import { Slider } from '@components/UI/Slider';
import { RecentlyCompletedProjectsItems } from './RecentlyCompletedProjects.constants';

export const RecentlyCompletedProjectsComponent: React.FC = () => {
  return (
    <Slider
      items={RecentlyCompletedProjectsItems.items}
      title={RecentlyCompletedProjectsItems.title}
    />
  );
};
