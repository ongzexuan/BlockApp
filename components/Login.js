import React, { Component } from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image
} from 'react-native'

export default class Login extends Component {
	static navigationOptions = {
		title: 'Log In'
	}

	render() {
		return (
			<View style={styles.login}>
				<View style={styles.logo_container}>
					<Image
						style={styles.logo}
						source={require('../assets/subra.jpg')}
					/>
				</View>
				<TextInput style={styles.input}
					autoCapitalize='none'
					autoCorrect={false}
					keyboardType='email-address'
					returnKeyType='next'
					placeholder='Email'
					placeholderTextColor='rgba(0,0,0,0.7)'
				/>
				<TextInput style={styles.input}
					autoCapitalize='none'
					autoCorrect={false}				
					returnKeyType='go'
					placeholder='Password'
					placeholderTextColor='rgba(0,0,0,0.7)'
					secureTextEntry
				/>

				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.signupButtonContainer}>
					<Text style={styles.signup_buttonText}>Don't have an account? Sign up here</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	login: {
		padding: 50,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center'
	},
	logo: {

	},
	logo_container: {
		alignItems: 'center',
		marginBottom: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 10,
		padding: 10,
		color: '#fff'
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '700'		
	},
	buttonContainer: {
		backgroundColor: '#2980b6',
		paddingVertical: 15
	},
	signupButtonContainer: {
		marginTop: 10,		
		paddingVertical: 15,
		alignItems: 'center'
	},
	signupButtonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '500'
	}
})