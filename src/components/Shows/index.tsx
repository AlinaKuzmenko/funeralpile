import { gigs, IGig } from './info';
import Gig from '../Gig';
import Heading2 from '../Heading2';
import './styles.scss';
import ContentBlock from '../ContentBlock';

function sortByDate(a: IGig, b: IGig) {
  const aDate = a.date.getTime();
  const bDate = b.date.getTime();
  if (aDate < bDate) {
    return 0;
  }
  if (aDate > bDate) {
    return -1;
  }
  return 1;
}

function Shows() {
  return (
    <ContentBlock className="shows">
      <Heading2 className="heading">
        Shows
      </Heading2>
      <div className="container">
        {gigs
          .sort(sortByDate)
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
