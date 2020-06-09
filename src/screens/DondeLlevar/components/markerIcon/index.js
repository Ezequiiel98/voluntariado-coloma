import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/fontawesome-free-solid';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';

import styles from './index.module.scss';

export const markerIcon = (color) => L.divIcon({
  html: ReactDOMServer.renderToString(<FontAwesomeIcon icon={faMapMarkerAlt} className={styles[color]} />),
  iconSize: [41, 113],
  className: ''
 });
