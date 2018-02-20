import React, { Component } from 'react'
import { ScrollView, Image, View } from 'react-native'

import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import Input from '../Components/Input'
import Button from '../Components/FullButton'
import { Images } from '../Themes'

import { connect } from 'react-redux'
import LaunchActions from '../Redux/LaunchRedux'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = { phone: '', password: '' }
  }

  onLoginClick () {
    let phone = this.state.phone
    let password = this.state.password
    console.log(`phone: ${phone}, password: ${password}`)
    this.props.login(phone, password)
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
          <Input
            placeholder='password'
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry
          />
          <Button
            text='login'
            styles={{marginTop: 12}}
            onPress={this.onLoginClick.bind(this)}
          />
          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = (dispatch) => ({
  login: (phone, password) => dispatch(LaunchActions.loginRequest(phone, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
