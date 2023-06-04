import Text from '../Text';
import { IFigure } from './types';
import styles from './styles.module.scss';

const defaultImageProps = {
  src: '',
  alt: 'No image',
  width: 150,
  height: 200,
};

function Figure({
  image,
  caption = '',
  className = '',
}: IFigure) {
  return (
    <figure className={`${styles.figure} ${className}`}>
      <img
        loading="lazy"
        src={image.src || defaultImageProps.src}
        alt={image.alt || defaultImageProps.alt}
        width={image.width || defaultImageProps.width}
        height={image.height || defaultImageProps.height}
      />
      {!!caption && (
        typeof caption == 'string'
          ? (
            <Text
              variant="body2"
              tag="figcaption"
              className="caption"
            >
              {caption}
            </Text>
          )
          : caption
      )}
    </figure>
  );
}

export default Figure;
