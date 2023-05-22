import {
  IText, TextVariant, TTag, TTextVariant,
} from './types';
import './styles.scss';

function defineTag(variant: TTextVariant): TTag {
  switch (variant) {
    case TextVariant.h1:
    case TextVariant.h2:
    case TextVariant.h3:
    case TextVariant.h4:
      return variant;
    default:
      return 'span';
  }
}

function Text({
  variant = TextVariant.body2,
  tag,
  children,
  className = '',
  ...rest
}: IText) {
  const Tag = tag || defineTag(variant);
  return (
    <Tag
      className={`${variant} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Text;
