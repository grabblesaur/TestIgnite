import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { TextInput } from 'react-native'
import styles from './Styles/InputStyle'
import themes from '../Themes/Colors'

export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool
  }

  static defaultProps = {
    autoCorrect: false,
    secureTextEntry: false
  }

  render () {
    return (
      <TextInput
        style={styles.container}
        placeholder={this.props.placeholder}
        autoCorrect={this.props.autoCorrect}
        onChangeText={this.props.onChangeText}
        value={this.props.value}
        placeholderTextColor={themes.steel}
        color={themes.silver}
        secureTextEntry={this.props.secureTextEntry}
      />
    )
  }
}
