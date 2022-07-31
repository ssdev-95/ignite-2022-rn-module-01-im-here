import { Alert, Platform, ToastAndroid } from 'react-native'

export function toastMe(message: string, title?: string = '') {
  if (Platform.OS === 'ios') {
    Alert.alert(title, message)
  } else {
    ToastAndroid.show(message, ToastAndroid.SHORT)
  }
}
