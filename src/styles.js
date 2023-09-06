import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignContent: 'center',
    },
    calculatorTotal: {
        marginTop: 50,
        alignItems: 'flex-end',
        padding: 10,
    },
    calculatorLayout: {
        flexDirection: 'row',
    },
    clearButton: {
        alignItems: 'center',
        backgroundColor: 'gray',
        justifyContent: 'center',
        height: 100,
        width: 300,
        marginTop: 20,
        borderRadius: 100,
    },
    signButton: {
        alignItems: 'center',
        backgroundColor: 'gray',
        justifyContent: 'center',
        height: 100,
        width: 100,
        margin: 20,
        borderRadius: 100,
    },
    numButton: {
        alignItems: 'center',
        backgroundColor: 'orange',
        justifyContent: 'center',
        height: 100,
        width: 100,
        marginTop: 20,
        borderRadius: 100,
    },
    zeroButton: {
        alignItems: 'center',
        backgroundColor: 'orange',
        justifyContent: 'center',
        height: 100,
        width: 200,
        marginTop: 20,
        borderRadius: 100,
    },
    textSize: {
        fontSize: 50,
        color: 'white'
    },
    totalSize: {
        fontSize: 80,
        color: 'white'
    }
});

export default styles;