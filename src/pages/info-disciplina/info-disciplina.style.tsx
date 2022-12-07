import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    },
    list: {
        paddingVertical: 24,
        paddingHorizontal: 20
    },
    textHeader:{
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
    wrapper: {
        backgroundColor: '#FAB246',
        height: 80,
        width: '100%',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    text: {
        fontSize: 18,
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 20,
    },
    monitorWrapped: {
        backgroundColor: '#FFCE84',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 20,
    },
    column: {
        backgroundColor: '#DBE8D6',
        marginLeft: 3,
        marginTop: 13,
        padding: 5,
        borderRadius: 5,
    },
    row:{
        flexDirection: 'row',
    },
});
