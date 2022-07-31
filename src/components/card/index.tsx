import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

import { Participant } from '../../screens/home'

type CardProps = {
  participant: Participant
  pressHandler: (id: string) => void
}

export function Card({ participant, pressHandler }: CardProps) {
  function handlePress() {
    pressHandler(participant.id)
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.participantName}>{participant.name}</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
