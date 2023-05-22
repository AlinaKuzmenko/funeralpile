interface IWidgetArtworkTrackList {
  width?: number;
  height?: number;
  className?: string;
}

function WidgetArtworkTrackList({ width = 350, height = 820, className = '' }: IWidgetArtworkTrackList) {
  return (
    <div className={className}>
      <iframe
        title="evoked in flames"
        style={{ border: 0, width, height }}
        src="https://bandcamp.com/EmbeddedPlayer/album=4163753156/size=large/bgcol=333333/linkcol=ffffff/package=2388562080/transparent=true/"
        seamless
      >
        <a href="https://funeralpile.bandcamp.com/album/evoked-in-flames">
          Evoked In Flames by Funeral Pile
        </a>
      </iframe>
    </div>
  );
}

export default WidgetArtworkTrackList;
