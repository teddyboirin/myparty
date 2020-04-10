import React from 'react';
import {AppLoading} from "expo";
import {StyleSheet, Text, View} from 'react-native';
import {useFonts} from "@use-expo/font";
export default function ConnectForm({navigation}) {

    let [fontsLoaded] = useFonts({
        'Gilroy-Regular': 'http://teddyboirin.com/fonts/Gilroy-Medium.ttf',
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
       return (
           <View style={styles.container}>
               <Text>salut</Text>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    header: {
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 15,
        height: '6%',
        width: '100%',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textInput: {
        width: '100%',
        borderColor: '#FD867E',
        borderWidth: .5,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        fontFamily: 'Gilroy-Regular'

    },

    secondInputContainerTwoInputs: {
        width: "50%",
        padding: 5,
        justifyContent:"space-between",
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    titleInput: {
        marginBottom: 10,
        fontFamily: 'Gilroy-Regular'
    },
    containerInput: {
        flexWrap: 'wrap',
        width: "100%",
        flexDirection: 'row',
        padding: 5
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
        fontFamily: 'Gilroy-Regular',
        marginTop: 5
    },


});
