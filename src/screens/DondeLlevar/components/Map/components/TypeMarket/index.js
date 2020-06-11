import { useLeaflet } from 'react-leaflet';
import PropTypes from 'prop-types';

import L from 'leaflet';
import { useEffect } from 'react';

import styles from './index.module.scss';

export default function TypeMarket ({ type, color, position }) {
  const { map } = useLeaflet();

  useEffect(() => {
    const typeMarket = L.control({ position });

    typeMarket.onAdd = () => {
      const containerType = L.DomUtil.create('div', styles[color]);
      containerType.innerHTML = `<p class=${styles.type}>${type}</p>`;
      return containerType;
    };

    typeMarket.addTo(map);
  });
  return null;
}

TypeMarket.propTypes = {
  color: PropTypes.oneOf(['red', 'lightblue', 'green']),
  position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),
  type: PropTypes.string.isRequired
};
