/** @format */

import React from 'react';

import styles from './HomePage.module.scss';
import { AboutMe, CurrentProjects, Experience, Skills } from '@components/HomePage';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <AboutMe />
      <Skills />
      <Experience />
      <CurrentProjects />
    </div>
  );
};
