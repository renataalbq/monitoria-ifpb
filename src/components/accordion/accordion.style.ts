import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    items: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cecece'
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
        marginTop: 6,
    },
    textButton: {
        paddingVertical: 12,
        fontSize: 16,
    },
    accordionButton: {
        backgroundColor: '#f0f0f0',
    },
    badge: {
        backgroundColor: "#FAB246", 
        width: 50,
        height: 20, 
        borderRadius: 10, 
        marginRight: 10,
        justifyContent: 'center',
    },
    textBadge: {
        textAlign: 'center',
    }
});