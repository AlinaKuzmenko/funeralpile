import BandStory from '../../components/BandStory';
import BandMembers from '../../components/BandMembers';
import WidgetTrackList from '../../components/WidgetTracklist';
import Contacts from '../../components/Contacts';
import styles from './styles.module.scss';

function Home() {
  return (
    <main className={styles.home}>
      <BandStory />
      <WidgetTrackList />
      <Contacts />
      <BandMembers />
    </main>
  );
}

export default Home;
