import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Logo from '../../images/logo.svg';
import ConnectButton from "../Buttons/ConnectButton";
import {LinearGradient} from "expo-linear-gradient";
export default function Congratulations({navigation}, props) {

    return (
        <View style={styles.isSubmit}>
            <Logo width={300} height={100} />
            <Text style={styles.congratulations}>Félicitations {props.firstName + ' ' + props.lastName}, tu peux désormais organiser tes évènements sur l'application ! </Text>
            <View style={{marginTop:30}}>
                    <TouchableOpacity
                        style={styles.buttonShadowConnect}
                        onPress={() => navigation.navigate('Connect')}>
                        <LinearGradient style={styles.button} colors={['#FD867E', '#FD7EAC']} start={[0, 0.65]}
                                        end={[0.70, 1]}>
                            <Text style={styles.textButton}>Connexion</Text>
                        </LinearGradient>
                    </TouchableOpacity>
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
    isSubmit: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    congratulations: {
        marginTop: 20,
        fontSize: 18,
        width: '70%',
        textAlign: 'center',
        lineHeight: 23
    },
    button: {
        marginTop: 30,
        height: 45,
        width: 330,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 25
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
})