import React from 'react';
import type { ReactNode } from 'react';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';

export interface SlickSliderProps<RendererArg1Type> {
  slickSettings?: Settings;
  renderer: (arg1: RendererArg1Type, arg2: number) => ReactNode;
  items: RendererArg1Type[];
  children?: ReactNode;
}

const SlickSlider = <RendererArg1Type extends object>(props: SlickSliderProps<RendererArg1Type>) => {
  const { slickSettings, renderer, items } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...slickSettings,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>{items && items.length > 1 && items.map((i, k) => renderer(i, k))}</Slider>
    </div>
  );
};

export default SlickSlider;
