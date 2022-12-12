import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#DBE8D6',
    },
    content: {
        marginHorizontal: 35,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        paddingVertical: 60,
        paddingHorizontal: 20,
        position: 'absolute',
        top: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundLogo: {
        width: '100%',
        height: 300,
        backgroundColor: '#FAB246',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    logo: {
        width: 110,
        height: 110,
        alignSelf: 'center',
        marginTop: 100,
        backgroundColor: "#07B361",
        borderRadius: 50,
    },
    button: {
        backgroundColor: "#07B361",
        borderRadius: 5,
        marginTop: 8,
        marginBottom:  10,
        color: "#FFFFFF",
        padding: 10,
        width: "100%",
        alignItems: "center",
        alignSelf: "center",
    },
    buttonText: {
        color: "#FFFF",
        fontSize: 16,
    }
});
