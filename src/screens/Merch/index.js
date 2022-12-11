import React from 'react';
import Section from '../../components/Section';
import Text from '../../components/Text';
import MerchItem from './MerchItem';
import merch1 from '../../assets/merch1.jpeg';
import './styles.scss';


const Merch = () => {
  return (
    <Section className="merch">
      <Text component={'h1'}>
        Merch & Music
      </Text>
      <Text
        component={'p'}
        className="mailto"
      >
        Place your Order here:{' '}
        <a href="mailto:order@funeral-pile.de">
          order@funeral-pile.de
        </a>
      </Text>
      <div className="items">
        <MerchItem
          price={5}
          description={'Funeral Pile Logo Patch 10×5,5cm embroidered'}
          image={merch1}
        />
        <MerchItem
          price={5}
          description={'Funeral Pile Logo Patch 10×5,5cm embroidered'}
          image={merch1}
        />
        <MerchItem
          price={5}
          description={'Funeral Pile Logo Patch 10×5,5cm embroidered'}
          image={merch1}
        />
      </div>
    </Section>
  )
};

export default Merch;
