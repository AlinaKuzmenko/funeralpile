import { useRouteError } from 'react-router-dom';
import Text from '../../components/Text';
import styles from './styles.module.scss';

function Error() {
  const error: any = useRouteError();
  return (
    <main className={styles.error}>
      <Text variant="h1">
        Oops!
      </Text>
      <Text variant="body1" tag="p">
        {error.statusText || error.message}
      </Text>
    </main>
  );
}

export default Error;
