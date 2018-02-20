import React, { Component } from 'react'
import { ScrollView, Image, View } from 'react-native'

import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import Input from '../Components/Input';
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = { phone: '' }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode='stretch'
        />
        <ScrollView style={styles.container}>
          <Image
            source={Images.logo}
            style={{ alignSelf: 'center' }}
          />
          <Input
            placeholder='phone'
            onChangeText={(phone) => this.setState({phone})}
            value={this.state.phone}
          />
          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}
