import React from 'react';

import styles from './Slider.module.scss';
import 'swiper/scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Card } from '../Card';
import { SliderProps } from './Slider.types';
import { IconsEnum, SvgIcon } from '../SvgIcon';

export const Slider: React.FC<SliderProps> = ({ items, title }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);
  return (
    <>
      <div className={`${styles.container} small__container`}>
        <div className={`${styles.title} title`}>{title}</div>
        <div className={styles.arrows}>
          <div ref={navigationPrevRef} className={`${styles.prev} ${styles.arrow}`}>
            <SvgIcon size={28} src={IconsEnum.arrow} />
          </div>
          <div ref={paginationRef} className={styles.pagination}></div>
          <div ref={navigationNextRef} className={`${styles.next} ${styles.arrow}`}>
            <SvgIcon size={28} src={IconsEnum.arrow} />
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {items ? (
          <Swiper
            className={styles.swiper}
            spaceBetween={30}
            slidesPerView={1}
            loop
            pagination={{ type: 'fraction', el: paginationRef.current, clickable: true }}
            navigation={{
              nextEl: navigationNextRef.current,
              prevEl: navigationPrevRef.current,
              disabledClass: 'swiper-button-disabled',
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            initialSlide={0}
            modules={[Navigation, Pagination]}>
            {items.map((obj, i) => (
              <SwiperSlide key={i}>
                <Card {...obj} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div>All done</div>
        )}
      </div>
    </>
  );
};
