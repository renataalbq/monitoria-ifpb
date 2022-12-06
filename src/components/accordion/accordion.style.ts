import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    items: {
        backgroundColor: '#DBE8D6',
        margin: 5,
        borderRadius: 10,
        padding: 10,
    },
    image: {
        width: 30,
        borderRadius: 50,
        height: 30,
        marginLeft: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 18,
        marginTop: 10,
    },
    textButton: {
        paddingVertical: 12,
        fontSize: 16,
    }
});