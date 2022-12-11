import React from 'react';
import Section from '../../components/Section';
import Text from '../../components/Text';
import WidgetTrackList from '../../components/WidgetTracklist';
import vinylAndCD from '../../assets/home_1.jpeg';
import vinyl from '../../assets/home_2.jpeg';
import './styles.scss';


const Link = ({ to, children }) => (
  <a
    href={to}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

const Home = () => {
  return (
    <Section className="home">
      <Text component={'h1'}>
        Great News
      </Text>
      <div className="info">
        <Text component={'p'}>
          Our new album was physically released by <a href="https://protagonistmusic.bandcamp.com/">Protagonist Music</a> on 25.02.2022.
        </Text>
        <Text component={'p'}>
          LP and CDs can then be ordered at
          <Link to="https://deathwishinc.com/collections/protagonist"> Deathwish Inc. </Link> or on our
          <Link to="https://funeralpile.bandcamp.com/"> Bandcamp </Link> page.
        </Text>
        <Text component={'p'}>
          The CD is released in a noble digipack and a bonus song.
          The 180 gram LP comes with an inlay and download code. The color of the LP is gray with black smoke.
        </Text>
      </div>
      <img
        src={vinylAndCD}
        alt="Funeral Pile - Evoked In Flames vinyl and CD"
      />
      <img
        src={vinyl}
        alt="Funeral Pile - Evoked In Flames vinyl"
      />
      <WidgetTrackList />
    </Section>
  );
};

export default Home;
