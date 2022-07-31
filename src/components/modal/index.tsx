import { useState } from 'react'

import {
  Modal as RNModal,
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native'
import {colors} from '../../../assets/colors'

import { styles } from './styles'

type ModalProps = {
  onSubmit: (text:string) => void
}

export function Modal({ onSubmit }:ModalProps) {
  const [visible, setVisible] = useState(true)
	const [eventName, setEventName] = useState('')

	function resetFields() {
	  setEventName('')
	}

	function handleCloseModal() {
	  console.log('Modal has been closed.')
	  setVisible(false)
	}

	function handleSubmit() {
	if(!eventName) {
	  return
	}
	  onSubmit(eventName)
		resetFields()
		handleCloseModal()
	}

  return (
	  <RNModal
		  visible={visible}
			animationType="slide"
			transparent={true}
			onRequestClose={handleCloseModal}
			presentationStyle="overFullScreen"
		>
			<View style={styles.modalWrapper}>
  		  <View style={styles.modalContainer}>
				  <View style={styles.modalIndicator} />
	  		  <View style={styles.modalForm}>
					  <TextInput
						  placeholder="Event name"
							onChangeText={text=>setEventName(text)}
							placeholderTextColor={colors.lightGray}

							defaultValue={eventName}
						  style={styles.modalInput}
						/>

						<View style={styles.modalActionWrapper}>
						  <TouchableOpacity
							  onPress={handleCloseModal}
								style={styles.modalButtonDismiss}
							>
							  <Text style={styles.modalButtonText}>
								  dismiss
								</Text>
							</TouchableOpacity>

							<TouchableOpacity
							  onPress={handleSubmit}
								style={styles.modalButtonSubmit}
							>
							  <Text style={styles.modalButtonText}>
								  submit
								</Text>
							</TouchableOpacity>
						</View>
					</View>
		  	</View>
			</View>
		</RNModal>
	)
}
