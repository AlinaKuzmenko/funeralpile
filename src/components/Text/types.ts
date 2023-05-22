import React from 'react';

export enum TextVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  body1 = 'body1',
  body2 = 'body2',
  body3 = 'body3',
  caption1 = 'caption1',
  caption2 = 'caption2',
}

export type TTextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'body3' | 'caption1' | 'caption2';

export interface IText {
  children: string | React.ReactElement;
  variant?: TTextVariant
  tag?: TTag;
  className?: string;
}

export type TTag = keyof React.JSX.IntrinsicElements;
