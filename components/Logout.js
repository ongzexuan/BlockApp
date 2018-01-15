import React, { Component } from 'react'
import {
	View,
	Text
} from 'react-native'

export default class Logout extends Component {
	static navigationOptions = {
		title: 'Log Out'
	}

	render() {
		return (
			<Text>Logout.js</Text>
		);
	}
}