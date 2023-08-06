import {
  imgCD,
  imgVinyl,
  imgPatch,
  imgLogo,
  imgLogoGirly,
  imgEvoked,
  imgEvokedGirly,
  imgEvokedGray,
  imgEvokedRed,
} from '../../assets/merch';

export enum MerchGroupName {
  'tShirt' = 'T-Shirts',
  'record' = 'Records',
  'patch' = 'Patches',
}

export interface IMerchItem {
  id: number;
  name: string;
  type: TMerchGroup;
  price: number;
  image: string;
}

export type TMerchGroup = keyof typeof MerchGroupName;

export const merch: IMerchItem[] = [
  {
    id: 1,
    name: 'Evoked In Flames – Funeral Pile - Evoked In Flames "Digipack"',
    type: 'record',
    image: imgCD,
    price: 13,
  },
  {
    id: 2,
    name: 'Evoked In Flames – Funeral Pile - Evoked In Flames "Limited Edition 12 Vinyl"',
    type: 'record',
    image: imgVinyl,
    price: 22,
  },
  {
    id: 3,
    name: 'T-Shirt Evoked in Flames',
    type: 'tShirt',
    image: imgEvoked,
    price: 16,
  },
  {
    id: 4,
    name: 'T-Shirt Evoked in Flames - Ladies',
    type: 'tShirt',
    image: imgEvokedGirly,
    price: 16,
  },
  {
    id: 5,
    name: 'T-Shirt Evoked in Flames - LIMITED EDITION - charcoal gray',
    type: 'tShirt',
    image: imgEvokedGray,
    price: 16,
  },
  {
    id: 6,
    name: 'T-Shirt Evoked in Flames - LIMITED EDITION - burgundy red',
    type: 'tShirt',
    image: imgEvokedRed,
    price: 16,
  },
  {
    id: 7,
    name: 'T-Shirt Funeral Pile Logo',
    type: 'tShirt',
    image: imgLogo,
    price: 12,
  },
  {
    id: 8,
    name: 'T-Shirt Funeral Pile Logo - Ladies',
    type: 'tShirt',
    image: imgLogoGirly,
    price: 12,
  },
  {
    id: 9,
    name: 'Logo Patch',
    type: 'patch',
    image: imgPatch,
    price: 5,
  },
];

export const tShirts = merch.filter((item: IMerchItem) => item.type == 'tShirt');

export const records = merch.filter((item: IMerchItem) => item.type == 'record');

export const patches = merch.filter((item: IMerchItem) => item.type == 'patch');
