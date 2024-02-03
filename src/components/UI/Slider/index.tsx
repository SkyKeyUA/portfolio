import React from 'react';

import styles from './Slider.module.scss';
import 'swiper/scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Card } from '../Card';
import { SliderProps } from './Slider.types';
import { IconsEnum, SvgIcon } from '../SvgIcon';

export const Slider: React.FC<SliderProps> = ({ items, title }) => {
  return (
    <>
      <div className={`${styles.container} small__container`}>
        <div className={`${styles.title} title`}>{title}</div>
        <div className={styles.arrows}>
          <div className={`${styles.prev} ${styles.arrow}`}>
            <SvgIcon size={28} src={IconsEnum.arrow} />
          </div>
          <div className={styles.pagination}></div>
          <div className={`${styles.next} ${styles.arrow}`}>
            <SvgIcon size={28} src={IconsEnum.arrow} />
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <Swiper
          className={styles.swiper}
          spaceBetween={30}
          slidesPerView={1}
          loop
          pagination={{ type: 'fraction', el: `.${styles.pagination}`, clickable: true }}
          navigation={{
            nextEl: `.${styles.next}`,
            prevEl: `.${styles.prev}`,
            disabledClass: 'swiper-button-disabled',
          }}
          initialSlide={0}
          modules={[Navigation, Pagination]}>
          {items ? (
            items.map((obj, i) => (
              <SwiperSlide key={i}>
                <Card {...obj} />
              </SwiperSlide>
            ))
          ) : (
            <div>All dane</div>
          )}
        </Swiper>
      </div>
    </>
  );
};
