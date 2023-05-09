import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
    },
    list: {
        paddingVertical: 24,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        padding: 7,
        borderBottomWidth: 1,
        borderBottomColor: '#cecece'
    },
    item: {
        paddingBottom: 10,
        paddingTop: 10,
        marginLeft: 24,
        width: '80%'
    },
    text: {
        fontSize: 16,
    },
    badge: {
        backgroundColor: "#FAB246", 
        width: 50,
        height: 20, 
        borderRadius: 10, 
        marginRight: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
});
