import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { TextInput } from 'react-native'
import styles from './Styles/InputStyle'

export default class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool,
    onChangeText: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }

  static defaultProps = {
    autoCorrect: false
  }

  render () {
    return (
      <TextInput
        style={styles.container}
        placeholder={this.props.placeholder}
        autoCorrect={this.props.autoCorrect}
        onChangeText={this.props.onChangeText}
        value={this.props.value}
      />
    )
  }
}
