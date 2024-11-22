import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles/styles'

const TeamCard = ({ teamName }: { teamName: string }) => {
    return (
        <View style={styles.card}>
            <Text>{teamName}</Text>
        </View>
    )
}

export default TeamCard