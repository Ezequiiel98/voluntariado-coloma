 import {
  faFacebookF,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope, faCamera } from '@fortawesome/fontawesome-free-solid';

export const SOCIAL_NETWORKS = [
  {
    key: 0,
    userName: 'econsientes@gmail.com',
    nameSocial: 'gmail',
    icon: faEnvelope,
    externalPath: 'https://gmail.com'
  },
  {
    key: 1,
    userName: '@proyectoecosintes',
    nameSocial: 'instagram',
    icon: faCamera,
    externalPath: 'https://instagram.com'
  },
  {
    key: 2,
    userName: '@proyectoecosintes',
    nameSocial: 'twitter',
    icon: faTwitter,
    externalPath: 'https://twitter.com/'
  },
  {
    key: 3,
    userName: '@proyectoecosintes',
    nameSocial: 'facebook',
    icon: faFacebookF,
    externalPath: 'https://facebook.com'
  }
];
