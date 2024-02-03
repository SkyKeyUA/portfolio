import React from 'react';

import styles from './Slider.module.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { SliderProps } from './Slider.types';
import { Card } from './Card';

export const Slider: React.FC<SliderProps> = ({ items }) => {
  return (
    <Swiper
      className={styles.swiper}
      spaceBetween={30}
      slidesPerView={1}
      loop
      pagination={{
        clickable: true,
      }}
      initialSlide={0}
      modules={[Pagination]}>
      {items.map((obj, i) => (
        <SwiperSlide key={i}>
          <Card {...obj} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
