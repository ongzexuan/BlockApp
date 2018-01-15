import React, { Component } from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image
} from 'react-native'

export default class Signup extends Component {
	static navigationOptions = {
		title: 'Sign Up'
	}

	render() {
		return (
			<View style={styles.login}>				
				<TextInput style={styles.input}
					autoCapitalize='none'
					autoCorrect={false}
					keyboardType='email-address'
					returnKeyType='next'
					placeholder='AndrewID'
					placeholderTextColor='rgba(0,0,0,0.7)'
				/>
				<TextInput style={styles.input}
					autoCapitalize='none'
					autoCorrect={false}				
					returnKeyType='go'
					placeholder='Password (at least 8 characters)'
					placeholderTextColor='rgba(0,0,0,0.7)'
					secureTextEntry
				/>

				<TouchableOpacity 
					style={styles.buttonContainer}
					onPress={() => {this.props.navigation.navigate('Main')}}
				>
					<Text style={styles.buttonText}>SIGN UP</Text>
				</TouchableOpacity>
				<TouchableOpacity 
					style={styles.signupButtonContainer}
					onPress={() => {this.props.navigation.navigate('Login')}}
				>
					<Text style={styles.signup_buttonText}>Have an account? Login here</Text>
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
		backgroundColor: '#00b587',
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