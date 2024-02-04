/** @format */

import React from 'react';

import styles from './HomePage.module.scss';
import {
  AboutMe,
  CompletedProjects,
  CompletedProjectsJS,
  CurrentProjects,
  Experience,
  RecentlyCompletedProjects,
  Skills,
} from '@components/HomePage';
import { Social } from '@components/UI/Social';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <AboutMe />
      <Skills />
      <Experience />
      <CurrentProjects />
      <RecentlyCompletedProjects />
      <CompletedProjects />
      <CompletedProjectsJS />
      <Social />
    </div>
  );
};
