import React, {PropTypes} from 'react'
import '../css/Marker.css'
// const select = this.props.selected ? 'around-circle' : 'a';
export default class Marker extends React.Component {
  render () {
    return (
      <div className={`${this.props.class} ${this.props.around}`}>20%</div>
    )
  }
}
Marker.propTypes = {
  selected: PropTypes.bool,
  location: PropTypes.object,
  selectLocation: PropTypes.func
}
Marker.defaultProps = {
  selected: true,
  class: 'circle-red',
  around: 'around-circle'
}
