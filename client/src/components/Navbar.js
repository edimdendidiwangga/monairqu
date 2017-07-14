import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class Navbar extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      <Menu inverted widths={3} style={{paddingTop: '20px', backgroundColor: '#172c41'}}>
        <Menu.Menu position='left' style={{paddingLeft: '20px'}}>
          <Menu.Item name='menu' onClick={() => this.handleItemClick()} >
            <Icon name='sidebar' />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu>
          <Menu.Item header>
            Report
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item name='menu2' onClick={() => this.handleItemClick()} >
            <Icon name='bars' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
