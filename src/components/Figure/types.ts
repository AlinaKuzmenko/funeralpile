import { ReactElement } from 'react';

export interface IFigureImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface IFigure {
  image: IFigureImage;
  caption?: string | ReactElement;
  className?: string;
}
