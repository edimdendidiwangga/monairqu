import React from 'react'
import { Button, Item } from 'semantic-ui-react'
import gambar from '../assets/images.png'

class Report extends React.Component {
  render () {
    return (
      <Item.Group style={{marginBottom: 0}}>
        <Item style={{backgroundColor: '#172c41', paddingTop: 10}}>
          <Item.Image size='small' style={{paddingLeft: '14px', width: '132px', height: '132px'}} src={gambar} />
          <Item.Content style={{paddingLeft: 12}}>
            <Item.Group style={{marginBottom: 0}}>
              <Item >
                <Item.Description color='white' style={{marginTop: 0}}>
                  <p style={{color: 'white', fontSize: 12, fontFamily: 'HelveticaNeue'}}>CANDI BOROBUDUR</p>
                  <p style={{color: 'white', fontSize: 12, fontFamily: 'HelveticaNeue', margin: 0}}>Jl. Badrawati, Borobudur, Magelang, Jawa Tengah.</p>
                </Item.Description>
                <Item.Content verticalAlign='bottom' style={{marginRight: 10, marginBottom: 0, paddingTop: 20}}>
                  <Button inverted color='blue' style={{ borderRadius: 25 }}>Detail</Button>
                </Item.Content>
              </Item>
            </Item.Group>
            <Item.Content style={{paddingTop: '15px', paddingBottom: '15px'}}>
              <Button color='green' style={{borderRadius: 25, backgroundColor: '#89bfff'}}>Sedang</Button>
              <Button circular icon='male' color='blue' />
              <Button circular icon='male' color='yellow' />
              <Button circular icon='male' color='red' />
            </Item.Content>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}

export default Report
