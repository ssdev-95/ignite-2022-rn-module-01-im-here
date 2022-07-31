import { StyleSheet } from 'react-native'
import { colors } from '../../../assets/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.deepBlue,
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  eventName: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 12,
    marginBottom: 24,
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  eventDate: {
    color: colors.lightGray,
    fontSize: 12,
  },
  input: {
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    color: colors.white,
    height: 42,
    paddingHorizontal: 10,
    flex: 1,
  },
  button: {
    width: 42,
    height: 42,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: -4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
})
