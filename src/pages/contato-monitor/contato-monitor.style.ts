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
        fontSize: 18,
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
        fontSize: 15,
        textAlign: 'center',
    },
    cursoBg: {
        zIndex: 1,
        position: 'absolute',
        left: 20,
        top: 85,
        width: '12%',
        backgroundColor: '#85A97F',
        borderRadius: 10,
        marginLeft: 200,
        padding: 3,
    },
    nameBg: {
        backgroundColor: '#85A97F',
        borderRadius: 20,
        width: '70%',
        alignSelf: 'center',
        marginTop: 15,
        padding: 6,
    }
});

