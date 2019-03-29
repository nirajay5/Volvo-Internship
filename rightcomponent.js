import React from 'react';
import { Text, View } from 'react-native';

export default class RightComponent extends React.Component {
	constructor(props) { //initializing state object
		super(props);
		this.state = {isLoggedIn: false};
	}

	ToggleUserLogin = ()=> { //called when user logs in or out: to change state
		this.setState(previousState => {
			return { isLoggedIn: !previousState.isLoggedIn };
		});
	}

	render() {
		let display = this.state.isLoggiedIn ? 'User' : this.props.username;
		return (
			<View style={styles.user}>
				<Text>{display}</Text>
			</View>
		);
	}
} 

const styles = StyleSheet.create({
  user: {
    color: blue,
    textDecorationLine: underline
  },
});