import Text from '../Text';
import { IGig } from '../Shows/info';
import locationImage from '../../assets/location.svg';
import styles from './styles.module.scss';

function Gig({ gig }: { gig: IGig }) {
  return (
    <div className={`${styles.gig} ${gig.date.getTime() < Date.now() ? 'past' : ''} `}>
      <a
        href={gig.link}
        target="_blank"
        rel="noreferrer"
        style={{ backgroundImage: `url(${gig.image})` }}
        className={styles.imageContainer}
      />
      <div className={styles.description}>
        <Text
          variant="body3"
          tag="span"
          className={styles.text}
        >
          {gig.date.toLocaleDateString()}
        </Text>
        <a
          href={gig.location}
          target="_blank"
          rel="noreferrer"
        >
          <span
            style={{ backgroundImage: `url(${locationImage})` }}
            className={styles.pin}
          />
          <Text
            variant="body3"
            tag="span"
            className={styles.text}
          >
            {gig.place}
          </Text>
        </a>
      </div>
    </div>
  );
}

export default Gig;
