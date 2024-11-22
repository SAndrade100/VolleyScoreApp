import { StyleSheet } from 'react-native'

const homeScreenStyles = StyleSheet.create({
    headerText: {
        fontFamily: 'sans-serif',
        fontSize: 48,
        color: '#DFEDE3',
        textAlign: 'center',
        marginVertical: 20,
        marginTop: 50
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center', 
        marginBottom: 50
    }
})

export default homeScreenStyles