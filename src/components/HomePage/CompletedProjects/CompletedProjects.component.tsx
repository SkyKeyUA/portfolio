import React from 'react';

import styles from './CompletedProjects.module.scss';
import { Slider } from '@components/UI/Slider';
import { CompletedProjectsItems } from './CompletedProjects.constants';

export const CompletedProjectsComponent: React.FC = () => {
  return (
    <Slider
      items={CompletedProjectsItems.items}
      title={CompletedProjectsItems.title}
      subtitle={CompletedProjectsItems.subtitle}
    />
  );
};
