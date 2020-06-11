import { useLeaflet } from 'react-leaflet';
import PropTypes from 'prop-types';
import L from 'leaflet';
import { useEffect } from 'react';

import styles from './index.module.scss';

export default function TypeMarker ({ type, color, position }) {
  const { map } = useLeaflet();

  useEffect(() => {
    const typeMarker = L.control({ position });

    typeMarker.onAdd = () => {
      const containerType = L.DomUtil.create('div', styles[color]);
      containerType.innerHTML = `<p class=${styles.type}>${type}</p>`;
      return containerType;
    };

    typeMarker.addTo(map);
  });
  return null;
}

TypeMarker.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['red', 'lightblue', 'green']).isRequired,
  position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright'])
};
