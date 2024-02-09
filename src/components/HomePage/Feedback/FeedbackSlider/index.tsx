import React from 'react';

import styles from './FeedbackSlider.module.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { SliderProps } from './FeedbackSlider.types';
import { Card } from './Card';
import { IconsEnum, SvgIcon } from '@components/UI/SvgIcon';

export const FeedbackSlider: React.FC<SliderProps> = ({ items }) => {
  const navigationPrevRef = React.useRef<HTMLDivElement>(null);
  const navigationNextRef = React.useRef<HTMLDivElement>(null);
  const onBeforeInit = (swiper: SwiperCore): void => {
    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
      const navigation = swiper.params.navigation;
      navigation.prevEl = navigationPrevRef.current;
      navigation.nextEl = navigationNextRef.current;
    }
  };
  return (
    <>
      <div className={`${styles.container} small__container`}>
        <div className={`${styles.title} title`}>customer feedback</div>
        <div className={styles.arrows}>
          <div ref={navigationPrevRef} className={`${styles.prev} ${styles.arrow}`}>
            <SvgIcon size={28} src={IconsEnum.arrow} />
          </div>
          <div className={styles.pagination}></div>
          <div ref={navigationNextRef} className={`${styles.next} ${styles.arrow}`}>
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
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
            disabledClass: 'swiper-button-disabled',
          }}
          onBeforeInit={onBeforeInit}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          initialSlide={0}
          modules={[Navigation, Pagination, Autoplay]}>
          {items.map((obj, i) => (
            <SwiperSlide key={i}>
              <Card {...obj} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
