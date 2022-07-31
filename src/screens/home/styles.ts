import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03000D',
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  eventName: {
    color: '#f0f2f5',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 12,
    marginBottom: 24,
    color: '#f0f2f5',
    fontSize: 24,
    fontWeight: 'bold',
  },
  eventDate: {
    color: '#8b8b8b',
    fontSize: 12,
  },
  input: {
    backgroundColor: '#454545',
    borderRadius: 5,
    color: '#f0f2f5',
    height: 42,
    paddingHorizontal: 10,
    flex: 1,
  },
  button: {
    width: 42,
    height: 42,
    backgroundColor: '#53d493',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f0f2f5',
    marginTop: -4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
})
