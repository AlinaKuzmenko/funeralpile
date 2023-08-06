import { gigs, IGig } from './info';
import Gig from '../Gig';
import Heading2 from '../Heading2';
import Text from '../Text';
import ContentBlock from '../ContentBlock';
import styles from './styles.module.scss';

function sortByDate(order: 'asc' | 'desc') {
  return function sort(a: IGig, b: IGig) {
    const aDate = a.date.getTime();
    const bDate = b.date.getTime();
    if (aDate < bDate) {
      return order == 'asc' ? -1 : 0;
    }
    if (aDate > bDate) {
      return order == 'asc' ? 0 : -1;
    }
    return 1;
  };
}

function Shows() {
  const futureShows = gigs.filter((gig: IGig) => gig.date.getTime() >= Date.now());
  const previousShows = gigs.filter((gig: IGig) => gig.date.getTime() < Date.now());
  return (
    <ContentBlock className={styles.shows}>
      <Heading2 className={styles.heading}>
        Shows
      </Heading2>
      <div className={styles.container}>
        <Text
          variant="h3"
          className={styles.heading}
        >
          Future events
        </Text>
        {futureShows
          .sort(sortByDate('asc'))
          .map((gig: IGig) => (
            <Gig
              key={gig.name}
              gig={gig}
            />
          ))}
      </div>
      <div className={styles.container}>
        <Text
          variant="h3"
          className={styles.heading}
        >
          Past events
        </Text>
        {previousShows
          .sort(sortByDate('desc'))
          .map((gig: IGig) => (
            <Gig
              key={gig.name}
              gig={gig}
            />
          ))}
      </div>
    </ContentBlock>
  );
}

export default Shows;
