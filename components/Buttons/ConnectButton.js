import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {useFonts} from "@use-expo/font";
import {AppLoading} from "expo";

export default function ConnectButton({navigation}) {
    let [fontsLoaded] = useFonts({
        'Gilroy-Regular': 'http://teddyboirin.com/fonts/Gilroy-Medium.ttf',
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View>
                <TouchableOpacity
                    style={styles.buttonShadowConnect}
                    onPress={() => navigation.navigate('Connect')}>
                    <LinearGradient style={styles.button} colors={['#FD867E', '#FD7EAC']} start={[0, 0.65]}
                                    end={[0.70, 1]}>
                        <Text style={styles.textButton}>Connexion</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        fontFamily: 'Gilroy-Regular',
        marginTop: 5
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
})