import Text from '../Text';
import styles from './styles.module.scss';

interface IHeading2 {
  children: string;
  className?: string;
}

function Heading2({ className, children }: IHeading2) {
  return (
    <Text
      variant="h2"
      className={`${styles.heading2} ${className}`}
    >
      {children}
    </Text>
  );
}

export default Heading2;
