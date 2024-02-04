/** @format */

import { CSSProperties } from 'react';

export enum IconsEnum {
  logo = '/images/icons/stroke/logo.svg',
  exit = '/images/icons/stroke/exit.svg',
  loader = '/images/icons/stroke/loader.svg',
  cart = '/images/icons/stroke/cart.svg',
  search = '/images/icons/stroke/search.svg',
  info = '/images/icons/stroke/info.svg',
  moon = '/images/icons/stroke/moon.svg',
  sun = '/images/icons/stroke/sun.svg',
  cross = '/images/icons/stroke/cross.svg',
  arrow = '/images/icons/stroke/arrow.svg',
  phone = '/images/icons/footer/footer-phone.svg',
  email = '/images/icons/footer/footer-email.svg',
  facebook = '/images/icons/social/facebook.svg',
  linkedin = '/images/icons/social/linkedin.svg',
  telegram = '/images/icons/social/telegram.svg',
  github = '/images/icons/social/github.svg',
}

export type SvgIconProps = {
  src: IconsEnum;
  onClick?: () => void;
  size?: number;
  rotate?: '0' | '90' | '180' | '270';
  className?: string;
  style?: CSSProperties;
};
