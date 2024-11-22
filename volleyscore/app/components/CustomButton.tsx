import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import buttonStyles from '../styles/buttonStyles'

interface ButtonProps {
    text: string,
    color: string
}

const CustomButtom: React.FC<ButtonProps> = ({ text, color }) => {
    return (
        <TouchableOpacity style={[buttonStyles.button, { backgroundColor: color}]}>
            <Text style={buttonStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButtom