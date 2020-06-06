 import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';

export const NAV_MENU = [
  {
    key: 0,
    textItem: 'Inicio',
    internalPath: '/Inicio'
  },
  {
    key: 1,
    textItem: 'Cómo Separar',
    internalPath: '/como-separar'
  },
  {
    key: 2,
    textItem: 'Dónde llevar los residuos',
    internalPath: '/donde-llevar'
  },
  {
    key: 3,
    textItem: 'Sponsors',
    internalPath: '/sponsors'
  },
  {
    key: 4,
    textItem: 'Contacto',
    internalPath: '/contacto'
  }
];

export const NAV_SOCIAL = [
  {
    key: 5,
    nameSocial: 'twitter',
    icon: faTwitterSquare,
    externalPath: 'https://twitter.com/'
  },

  {
    key: 6,
    nameSocial: 'instagram',
    icon: faInstagram,
    externalPath: 'https://instagram.com'
  },
  {
    key: 7,
    nameSocial: 'facebook',
    icon: faFacebookSquare,
    externalPath: 'https://facebook.com'
  }
];
