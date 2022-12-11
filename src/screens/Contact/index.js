import React from 'react';
import Section from '../../components/Section';
import Text from '../../components/Text';
import Mailto from '../../components/Mailto';
import './styles.scss';


const Contact = () => {
  return (
    <Section className="contact">
      <Text component={'h1'}>
        Contact
      </Text>
      <address>
        <div className="emails">
          <Mailto
            text={'General requests'}
            email={'contact@Funeral-Pile.de'}
          />
          <Mailto
            text={'Booking'}
            email={'booking@Funeral-Pile.de'}
          />
          <Mailto
            text={'Orders'}
            email={'order@funeral-pile.de'}
          />
        </div>
        <div className="mail">
          <Text component='h2'>Address:</Text>
          Matthias Riedl<br />
          Gottlob-Weiler-Str 8<br />
          83052 Bruckmühl<br />
        </div>
        <a
          href="tel:01794637592"
          className="phone"
        >
          <Text component='h2'>Phone:</Text>
          +491794637592
        </a>
      </address>
    </Section>
  )
};

export default Contact;
