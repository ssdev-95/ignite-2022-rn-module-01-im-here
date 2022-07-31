import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'

import { Card } from '../../components/card'
import { Divider } from '../../components/divider'
import { toastMe } from '../../utils/toast-me'
import { styles } from './styles'
import { colors } from '../../../assets/colors'

export type Participant = {
  name: string
  id: string
}

export function Home() {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [participant, setParticipant] = useState('')

  function handleRemoveParticipant(id: string) {
    const filtered = participants.filter((item) => item.id !== id)

    if (filtered.length === participants.length) {
      toastMe('Couldn`t remove participant', 'Fail')

      return
    }

    setParticipants(filtered)
    toastMe('Success')
  }

  function handleAddEvent() {
    if (!participant) {
      toastMe('Couldn`t add participant', 'Fail')

      return
    }
    setParticipants((prev) => [
      ...prev,
      {
        name: participant,
        id: uuid(),
      },
    ])
    setParticipant('')
    toastMe('Success')
  }

  function handleChange(text: string) {
    setParticipant(text)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event Name</Text>

      <Text style={styles.eventDate}>On Sun. 31, 2022 at 5pm</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Participant name"
          placeholderTextColor={colors.lightGray}
          style={styles.input}
          onChangeText={handleChange}
          defaultValue={participant}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddEvent}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Participants</Text>

      <Divider />

      <FlatList
        data={participants}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card participant={item} pressHandler={handleRemoveParticipant} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Divider}
      />
    </View>
  )
}
