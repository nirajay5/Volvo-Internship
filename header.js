import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AuditHeader extends React.Component {
	render() {
		return (
			<View style={styles.auditheader}>
				<Icon name="bars" size={35} style={styles.menuicon}/>
				<Text style={styles.title}>Audit Manager</Text>
				<Text style={styles.user}>User</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	auditheader: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginBottom: 60
	},
	menuicon: {
		paddingTop: 10,
		paddingLeft: 20,
		flex: 1
	},
	title: {
		flex: 2,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingTop: 10
	},
	user: {
		flex: 1,
		textAlign: 'right',
		paddingTop: 16,
		paddingRight: 20,
		color: 'blue',
    	textDecorationLine: 'underline'
	}
});