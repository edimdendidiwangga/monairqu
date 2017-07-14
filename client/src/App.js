import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter, Route} from 'react-router-dom'
import Map from './components/Map'
import { Grid } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Report from './components/Report'
import Toast from './components/Toast'

import './css/App.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLocation: null
    }
    this.selectLocation = this.selectLocation.bind(this)
  }

  selectLocation (id) {
    this.setState({selectedLocation: id})
  }

  render () {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Menu />
          </Grid.Column>
          <Grid.Column>
            <Grid.Column>
              <Navbar />
            </Grid.Column>
            <Grid.Column>
              <Report />
              <div className='App'>
                <BrowserRouter>
                  <Route exact path='/' component={() => <Map locations={this.props.locations} selected={this.state.selectedLocation} selectLocation={this.selectLocation} />} />
                </BrowserRouter>
              </div>
            </Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
App.defaultProps = {
  locations: [
    {
      id: 'location1',
      name: 'Benteng Vredeburg',
      lat: -7.800330,
      lng: 110.365970
    },
    {
      id: 'location2',
      name: 'Stasiun Yogyakarta',
      lat: -7.78942,
      lng: 110.3612363
    },
    {
      id: 'location3',
      name: 'Stasiun Lempuyangan',
      lat: -7.7909507,
      lng: 110.3714394
    }
  ]
}
App.propTypes = {
  locations: PropTypes.array
}
