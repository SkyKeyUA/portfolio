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
}

export type SvgIconProps = {
  src: IconsEnum;
  onClick?: () => void;
  size?: number;
  rotate?: '0' | '90' | '180' | '270';
  className?: string;
  style?: CSSProperties;
};
