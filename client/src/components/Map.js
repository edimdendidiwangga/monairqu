import React from 'react'

import GoogleMapReact from 'google-map-react'
import Marker from './Marker.js'
import PropTypes from 'prop-types'

export default class Map extends React.Component {
  render () {
    const selectedLocation = this.props.locations.find((location) => location.id === this.props.selected)
    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg'}}
        center={selectedLocation ? [selectedLocation.lat, selectedLocation.lng] : this.props.center}
        zoom={this.props.zoom}
      >
        {this.props.locations.map((location) =>
          <Marker key={location.id} lat={location.lat} lng={location.lng} location={location} selectLocation={this.props.selectLocation} selected={location.id === this.props.selected} />
        )}
      </GoogleMapReact>
    )
  }
}
Map.defaultProps = {
  center: [-7.800330, 110.365970],
  zoom: 14,
  locations: [],
  selected: null
}
Map.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  locations: PropTypes.array,
  selected: PropTypes.string
}
