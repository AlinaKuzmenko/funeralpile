import Text from '../Text';
import { IGig } from '../Shows/info';
import locationImage from '../../assets/location.svg';
import './styles.scss';

function Gig({ gig }: { gig: IGig }) {
  return (
    <div className={`gig ${gig.date.getTime() < Date.now() ? 'past' : ''} `}>
      <a
        href={gig.link}
        target="_blank"
        rel="noreferrer"
        style={{ backgroundImage: `url(${gig.image})` }}
        className="imageContainer"
      />
      <div className="description">
        <Text
          variant="body3"
          tag="span"
          className="text"
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
            className="pin"
          />
          <Text
            variant="body3"
            tag="span"
            className="text"
          >
            {gig.place}
          </Text>
        </a>
      </div>
    </div>
  );
}

export default Gig;
