import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		height: 54,
		width: 411,
		maxWidth: '100%',
		backgroundColor: '#1f1f1f',
		borderRadius: 5,
		overflow: 'hidden',
		alignItems: 'center',
		marginVertical: 12
	},
	participantName: {
		flex: 1,
		color: '#a7a7a7',
		paddingStart: 12,
		textAlign: 'left'
	},
	button: {
		width: 54,
		height: 54,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 10
	},
	buttonText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#f0f2f5',
		marginTop: -4
	}
})
