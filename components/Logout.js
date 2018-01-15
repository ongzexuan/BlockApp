import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet
} from 'react-native'

export default class Logout extends Component {
	static navigationOptions = {
		title: 'Log Out'
	}

	constructor() {
		super()
		this.moveToLogin = this.moveToLogin.bind(this)
	}

	moveToLogin() {
		this.props.navigation.navigate('Login')
		
	}

	componentDidMount() {
		setTimeout(this.moveToLogin,3000)
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<Text style={styles.mainText}>You have been successfully logged out!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	mainText: {
		color: '#333',
		textAlign: 'center',
		fontWeight: '500'
	}
})