import { StyleSheet } from 'react-native'
import { colors } from '../../../assets/colors'

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 54,
    width: 411,
    maxWidth: '100%',
    backgroundColor: colors.gray,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    marginVertical: 12,
  },
  participantName: {
    flex: 1,
    color: colors.white,
    paddingStart: 12,
    textAlign: 'left',
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: -4,
  },
})
