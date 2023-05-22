import {
  iconFacebook, iconInstagram, iconSpotify, iconYoutube,
} from '../../assets/social';

export interface ISocialLink {
  id: string;
  url: string;
  icon: string;
}

export const socialLinks: ISocialLink[] = [
  {
    id: 'facebook',
    url: 'https://www.facebook.com/funeralpile',
    icon: iconFacebook,
  },
  {
    id: 'instagram',
    url: 'https://www.instagram.com/funeralpileband/',
    icon: iconInstagram,
  },
  {
    id: 'youtube',
    url: 'https://www.youtube.com/channel/UC2k27LpnOnWGZICRbSS1zHA',
    icon: iconYoutube,
  },
  {
    id: 'spotify',
    url: 'https://open.spotify.com/artist/4hdHyjhM7DhCt0TW9O3QnN?si=l8cGWIYdT72kF8kOjEOs2g&nd=1',
    icon: iconSpotify,
  },
];
