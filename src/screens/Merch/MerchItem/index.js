import React from 'react';
import './styles.scss';


const MerchItem = ({ price, description, image }) => {
  return (
    <figure className="merchItem">
      <figcaption>
        <b>Price {price}€</b>
        {description}
      </figcaption>
      <img src={image} alt="Funeral Pile Logo Patch 10×5,5cm embroidered"/>
    </figure>
  )
};

export default MerchItem;
