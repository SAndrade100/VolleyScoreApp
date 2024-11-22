import React from 'react'
import { View, Text } from 'react-native'

import styles from '../styles/styles'
import homeScreenStyles from '../styles/homeScreenStyles'
import CustomButtom from '../components/CustomButton'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={homeScreenStyles.headerText}>VoleyScore</Text>
            <View style={homeScreenStyles.buttonContainer}>
                <CustomButtom text="Start" color="#0A802F" />
            </View>
        </View>
    )
}

export default HomeScreen