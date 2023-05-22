import BandStory from '../../components/BandStory';
import Merch from '../../components/Merch';
import BandMembers from '../../components/BandMembers';
// import Shows from '../../components/Shows';
// import WidgetArtworkTrackList from '../../components/WidgetArtworkTrackList';
import WidgetTrackList from '../../components/WidgetTracklist';
import Contacts from '../../components/Contacts';
import './styles.scss';

function Home() {
  return (
    <main className="home">
      {/* <Shows /> */}
      <BandStory className="about" />
      {/* <WidgetArtworkTrackList className="widget" /> */}
      <WidgetTrackList className="widget" />
      <Merch className="merch" />
      <Contacts className="contacts" variant="column" />
      <BandMembers className="bandMembers" />
    </main>
  );
}

export default Home;
