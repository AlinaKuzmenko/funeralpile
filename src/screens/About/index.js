import React from 'react';
import Section from '../../components/Section';
import Text from '../../components/Text';
import bandPhoto from '../../assets/about.jpeg';
import './styles.scss';


const About = () => {
  return (
    <Section className="about">
      <Text component={'h1'}>
        About us
      </Text>
      <div className="lineup">
        <Text component={'h2'}>
          Lineup
        </Text>
        <ul>
          <li>
            <Text className="listItem">
              <b>Annike:</b> Guitar
            </Text>
          </li>
          <li>
            <Text className="listItem">
              <b>Martin:</b> Bass, Drums, Recording
            </Text>
          </li>
          <li>
            <Text className="listItem">
              <b>Ralf:</b> Guitar, Lyrics
            </Text>
          </li>
          <li>
            <Text className="listItem">
              <b>Matthias:</b> Vocals, Lyrics
            </Text>
          </li>
          <li>
            <Text className="listItem">
              <b>Alina:</b> Drums
            </Text>
          </li>
        </ul>
      </div>
      <div className="info">
        <Text component={'p'}>
          Born from the ashes of a dead band: German based "Funeral Pile" was originally founded in 2008,
          but the band was put on hold two years later after some band members left their hometown for their studies.
        </Text>
        <Text component={'p'}>
          After almost ten years, Annike, Ralf and Matthias crossed paths again.
          They still shared the love to metal music and there was this powerful, constructive atmosphere again
          as soon as they jammed together.
        </Text>
        <Text component={'p'}>
          Finally Martin (The Course is Black, Ex-Pikes Edge, Waldgeflüster Live musician) joined the band.
          He was the missing piece of the puzzle to breathe life into their new sound. A sound which is not restricted to one genre.
        </Text>
        <Text component={'p'}>
          The wide variety of musical influences on the different band members made them create their own sort of metal music.
          Currently they are working on their first album which will be allocated somewhere between Death, Black, Doom and Stoner Metal.
        </Text>
      </div>
      <figure>
        <img
          src={bandPhoto}
          alt="band members standing near the stone wall"
        />
        <figcaption>Funeral Pile - Germany, Rosenheim, 2022</figcaption>
      </figure>
    </Section>
  )
};

export default About;
