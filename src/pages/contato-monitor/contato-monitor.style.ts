import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    },
    icon:{
        marginTop: 40,
    },
    list: {
        paddingVertical: 24,
        backgroundColor: '#FFFFFF',

    },
    text: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        backgroundColor: '#85A97F',
        width: '70%',
        borderRadius: 16,
        padding: 5,
        alignSelf: 'center',
    },

    image: {
        alignSelf: 'center',
        width: 100,
        borderRadius: 50,
        height: 100,
        backgroundColor: '#E4E4E4',
    },
    background: {
        paddingTop: 16,
        backgroundColor: '#FAB246',
        height: 180,
        width: '100%',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    curso: {
        marginLeft: 200,
        fontSize: 15,
        backgroundColor: '#85A97F',
        borderRadius: 6,
        textAlign: 'center',
        width: '20%',
    },
    cursoBg: {
        zIndex: 1,
        position: 'absolute',
        left: 20,
        top: 90,
    },
});

