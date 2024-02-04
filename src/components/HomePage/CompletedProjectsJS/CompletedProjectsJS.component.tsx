import { Slider } from '@components/UI/Slider';
import React from 'react';
import { CompletedProjectsJSItems } from './CompletedProjectsJS.constants';

export const CompletedProjectsJSComponent: React.FC = () => {
  return (
    <Slider
      items={CompletedProjectsJSItems.items}
      title={CompletedProjectsJSItems.title}
      subtitle={CompletedProjectsJSItems.subtitle}
    />
  );
};
