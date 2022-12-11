import React  from 'react';


const WidgetArtworkTrackList = ({ width = 350, height = 820 }) => {
  return (
    <iframe
      title="evoked in flames"
      style={{ border: 0, width, height, }}
      src="https://bandcamp.com/EmbeddedPlayer/album=4163753156/size=large/bgcol=333333/linkcol=ffffff/package=2388562080/transparent=true/"
      seamless>
      <a href="https://funeralpile.bandcamp.com/album/evoked-in-flames">
        Evoked In Flames by Funeral Pile
      </a>
    </iframe>
  );
}

export default WidgetArtworkTrackList;
