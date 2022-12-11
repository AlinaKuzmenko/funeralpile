import React from 'react';
import Section from '../../components/Section';
import Text from '../../components/Text';
import WidgetArtworkTrackList from '../../components/WidgetArtworkTrackList';
import WidgetTrackList from '../../components/WidgetTracklist';
import album1 from '../../assets/album_1.jpeg';
import './styles.scss';


const Discography = () => {
  return (
    <Section className="discography">
      <Text component={'h1'}>
        Discography
      </Text>
      <img
        src={album1}
        alt="Black and white graphic drawing of christians burning women on the pile"
      />
      <WidgetTrackList height={566} />
      <WidgetArtworkTrackList />
      {/*<div className="info">*/}
      {/*  <Text component={'h2'}>*/}
      {/*    Evoked In Flames*/}
      {/*  </Text>*/}
      {/*  <Text component={'p'}>*/}
      {/*    Released Digital on: 29.07.2021*/}
      {/*  </Text>*/}
      {/*  <Text component={'p'}>*/}
      {/*    Released Physically CD and LP on: 25.02.2022*/}
      {/*  </Text>*/}
      {/*  <ol>*/}
      {/*    <li>*/}
      {/*      Evoked In Flames*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      Funeral Pile*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      Food For The Flies*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      Dead End Red Sand (only Digital and on CD)*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      King Cockroach Vs. The Lizard Queen*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      Nameless City*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      Dead Horse Trail*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      Klondike (The White Silence)*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      Like The Ocean`s Tide*/}
      {/*    </li>*/}
      {/*  </ol>*/}
      {/*</div>*/}
    </Section>
  )
};

export default Discography;
