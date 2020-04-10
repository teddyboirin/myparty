import * as React from 'react';
import { AppLoading } from 'expo';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useFonts } from '@use-expo/font';
export default function JoinUsButton({navigation}) {
    let [fontsLoaded] = useFonts({
        'Gilroy-Regular': 'http://teddyboirin.com/fonts/Gilroy-Medium.ttf',
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.buttonConnect, styles.button, styles.buttonShadowJoin]}
                    onPress={() => navigation.navigate('JoinUs')}>
                    <Text style={styles.textButton} >Inscription</Text>
                </TouchableOpacity>
            </View>
        );
    }

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
        fontFamily: 'Gilroy-Regular'
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
