import { useState } from 'react';
import ContentBlock from '../ContentBlock';
import Spinner from '../Spinner';
import './styles.scss';

interface IWidgetTrackList {
  width?: string | number;
  height?: string | number;
  className?: string;

}

function WidgetTrackList({ width = '100%', height = 440, className = '' }: IWidgetTrackList) {
  const [loading, setLoading] = useState(true);
  const onLoad = () => {
    setLoading(false);
  };
  return (
    <ContentBlock className={`tracklist ${className}`}>
      {loading && (
        <div className="loader">
          <Spinner />
        </div>
      )}
      <iframe
        title="evoked in flames"
        style={{
          border: 0, width, maxWidth: 500, height,
        }}
        src="https://bandcamp.com/EmbeddedPlayer/album=4163753156/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/"
        onLoad={onLoad}
        seamless
      >
        <a href="https://funeralpile.bandcamp.com/album/evoked-in-flames">
          Evoked In Flames by Funeral Pile
        </a>
      </iframe>
    </ContentBlock>
  );
}

export default WidgetTrackList;
