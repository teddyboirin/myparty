import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Logo from '../images/logo.svg';
import Txt from '../images/first-img.svg';
import ConnectButton from "./Buttons/ConnectButton";
import JoinUsButton from "./Buttons/JoinUsButton";
export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Logo width={300} height={100} />
                <Txt style={styles.title} width={300} height={100} />
            </View>
            <View style={styles.buttonContainer}>
                <ConnectButton navigation={navigation}></ConnectButton>
                <JoinUsButton navigation={navigation}></JoinUsButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        flex: 1
    },

    title: {
        marginTop: 20
    },

    button: {
        height: 45,
        width: 330,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 25
    },
    buttonConnect: {
        backgroundColor: '#3A3A3A'
    },
    textButton: {
        backgroundColor: 'transparent',
        fontSize: 17,
        color: '#fff',
        textTransform: 'uppercase',
    },
    buttonShadowConnect: {
        shadowColor: "#FD867E",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 1,
        shadowRadius: 7,

        elevation: 9,
    },
    buttonShadowJoin: {
        shadowColor: "#3A3A3A",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.4,
        shadowRadius: 7,

        elevation: 9,
    },

});
