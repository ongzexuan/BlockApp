import React, { Component } from 'react'
import {
	View,
	Text
} from 'react-native'

export default class TestComponent extends Component {
	static navigationOptions = {
		title: 'Test Component'
	}

	render() {
		return (
			<Text>Something TestComponent.js</Text>
		);
	}
}