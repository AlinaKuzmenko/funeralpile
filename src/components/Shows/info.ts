import {
  DEMM, BB, Woid, Mammut, PRMM, FAE,
} from '../../assets/gigs';

export interface IGig {
  name: string;
  image: string;
  date: Date;
  place: string;
  link: string;
  location: string;
}

export const gigs: IGig[] = [
  {
    name: 'Bavarian Battle Winter',
    image: BB,
    date: new Date('January 1, 2023 18:00:00'),
    place: 'Rosenheim',
    link: 'https://www.facebook.com/BavarianBattleWinter.official',
    location: 'https://goo.gl/maps/6ijk9uM4KTCTeybx8',
  },
  {
    name: 'Dark Easter Metal Meeting',
    image: DEMM,
    date: new Date('April 9, 2023 15:00:00'),
    place: 'Munich',
    link: 'https://www.facebook.com/darkeastermetalmeeting',
    location: 'https://goo.gl/maps/8pfsD3wgPkjYCnoGA',
  },
  {
    name: 'Free and Easy',
    image: FAE,
    date: new Date('July 25, 2023 18:00:00'),
    place: 'Munich',
    link: 'https://www.facebook.com/freeandeasyfestival',
    location: 'https://goo.gl/maps/8pfsD3wgPkjYCnoGA',
  },
  {
    name: 'Pure Fucking Metal Festevil',
    image: PRMM, // TODO use another image
    date: new Date('August 26, 2023 18:00:00'),
    place: 'Laberweinting',
    link: 'https://www.facebook.com/PureFukingMetalFestevil',
    location: 'https://goo.gl/maps/3TUsZwwMbxJrPK77A',
  },
  {
    name: 'Mammut Metal Festival',
    image: Mammut,
    date: new Date('October 21, 2023 18:00:00'),
    place: 'Augsburg',
    link: 'https://www.facebook.com/Mammut.Festival',
    location: 'https://goo.gl/maps/ikcqs4q6NC1KMT3x5',
  },
  {
    name: 'Woid Weyd Metal',
    image: Woid,
    date: new Date('November 18, 2023 18:00:00'),
    place: 'Regen',
    link: 'https://www.facebook.com/woidweydmetal',
    location: 'https://goo.gl/maps/iVVE9h2tDDbpZpax9',
  },
];
