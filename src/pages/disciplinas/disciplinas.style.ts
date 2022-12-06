import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    },
    list: {
        paddingVertical: 24,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#DBE8D6',
        margin: 5,
        borderRadius: 10,
        padding: 7,
    },
    item: {
        paddingBottom: 10,
        paddingTop: 10,
        marginLeft: 24,
    },
    text: {
        fontSize: 18,
        flexWrap: 'wrap',
    },
    badge: {
        backgroundColor: "#FAB246", 
        width: 50, 
        height: 20, 
        borderRadius: 10, 
        marginRight: 10,
        alignSelf: 'center'
    }
});
