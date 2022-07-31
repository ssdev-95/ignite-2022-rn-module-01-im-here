import { StyleSheet } from 'react-native'
import { colors } from '../../../assets/colors'

export const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.78)',
  },
  modalContainer: {
    borderTopColor: colors.lightGray,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    borderTopWidth: 1,
    height: 350,
    width: '100%',
    backgroundColor: colors.deepBlue,
    marginTop: 'auto',
    justifyContent: 'space-between',
  },
  modalIndicator: {
    width: 80,
    height: 3,
    backgroundColor: '#3262c9',
    borderRadius: 10,
    marginVertical: 16,
    alignSelf: 'center',
  },
  modalActionWrapper: {
    flexDirection: 'row',
    marginTop: 36,
  },
  modalButtonSubmit: {
    flex: 1,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: colors.green,
    marginLeft: 24,
  },
  modalButtonDismiss: {
    flex: 1,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: colors.red,
  },
  modalButtonText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  modalForm: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 64,
  },
  modalInput: {
    width: 411,
    maxWidth: '100%',
    height: 64,
    borderRadius: 5,
    backgroundColor: colors.gray,
    color: colors.white,
    paddingLeft: 16,
  },
})
