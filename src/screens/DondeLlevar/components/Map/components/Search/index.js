/*  import React from 'react';
 */import { withLeaflet, MapControl } from 'react-leaflet';
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';


class Search extends MapControl {
  // eslint-disable-next-line class-methods-use-this
  createLeafletElement() {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      keepResult: true,
      searchLabel: '¿Dónde Estás?',
      retainZoomLevel: true,
      marker: {
        icon: this.props.markerIcon,
        draggable: false
      }
      });
    return searchControl;
  }

  componentDidMount() {
    const { map } = this.props.leaflet;
    map.addControl(this.leafletElement);
  }
}

export default withLeaflet(Search);
