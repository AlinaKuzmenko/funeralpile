import BandStory from '../../components/BandStory';
import Merch from '../../components/Merch';
import BandMembers from '../../components/BandMembers';
import WidgetTrackList from '../../components/WidgetTracklist';
import Contacts from '../../components/Contacts';
import styles from './styles.module.scss';

function Home() {
  return (
    <main className={styles.home}>
      <BandStory className={styles.about} />
      <WidgetTrackList className={styles.widget} />
      <Merch className={styles.merch} />
      <Contacts className={styles.contacts} variant="column" />
      <BandMembers className={styles.bandMembers} />
    </main>
  );
}

export default Home;
