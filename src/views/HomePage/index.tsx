/** @format */

import React from 'react';

import styles from './HomePage.module.scss';
import { AboutMe, Skills } from '@components/HomePage';
import { Experience } from '@components/HomePage/Experience';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <AboutMe />
      <Skills />
      <Experience />
    </div>
  );
};
