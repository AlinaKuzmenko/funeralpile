import {
  imgUrlAlina,
  imgUrlAnnike,
  imgUrlMartin,
  imgUrlMatthias,
  imgUrlRalf,
} from '../../assets/members';

export interface IMember {
  name: string;
  instruments: string;
  image: string;
}

export const lineup: IMember[] = [
  {
    name: 'Annike',
    instruments: 'guitar',
    image: imgUrlAnnike,
  },
  {
    name: 'Martin',
    instruments: 'bass, drums, recording',
    image: imgUrlMartin,
  },
  {
    name: 'Ralf',
    instruments: 'guitar, lyrics',
    image: imgUrlRalf,
  },
  {
    name: 'Matthias',
    instruments: 'vocals, lyrics',
    image: imgUrlMatthias,
  },
  {
    name: 'Alina',
    instruments: 'drums',
    image: imgUrlAlina,
  },
];
