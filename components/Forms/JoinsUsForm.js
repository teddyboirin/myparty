import React, { useState} from 'react';
import {AppLoading} from "expo";
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import axios from "axios";
import Congratulations from "../Congratulations/Congratulations";
import {useFonts} from "@use-expo/font";
export default function JoinsUsForm({navigation}) {

    const [getFirstName, setFirstName] = useState();
    const [getLastName, setLastName] = useState();
    const [getDateOfBirth, setDateOfBirth] = useState();
    const [getEmail, setEmail] = useState();
    const [getTown, setTown] = useState();
    const [getPassword, setPassword] = useState();
    const [submit, setSubmit] = useState(false);
    const sendValues = () => {
        let values = {
            firstName: getFirstName,
            lastName: getLastName,
            email : getEmail,
            password: getPassword,
            town: getTown,
            dateOfBirth: getDateOfBirth
        };
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post("http://127.0.0.1:8000/api/users", values)
            .then(
                setSubmit(true)
            ).then(
            console.log(getFirstName + ' ' + getLastName + ' ajouté !')

        )
            .catch(err => console.log(err));
    };

    let [fontsLoaded] = useFonts({
        'Gilroy-Regular': 'http://teddyboirin.com/fonts/Gilroy-Medium.ttf',
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {


        return submit === false ? (
            <Congratulations firstName={getFirstName} lastName={getLastName} navigation={navigation}></Congratulations>
        ) : (
            <View style={styles.container}>
                <View style={styles.header}><Text>Nous rejoindre</Text>
                </View>
                <View style={styles.containerInput}>
                    <View style={styles.secondInputContainerTwoInputs}>
                        <Text style={styles.titleInput}>Nom</Text>
                        <TextInput style={styles.textInput}
                                   autoCapitalize={"sentences"}
                                   placeholder={"Boirin"}
                                   textContentType={"familyName"}
                                   onChange={(e) => setFirstName(e.nativeEvent.text)}
                        />
                    </View>
                    <View style={styles.secondInputContainerTwoInputs}>
                        <Text style={styles.titleInput}>Prénom</Text>
                        <TextInput style={styles.textInput} autoCapitalize={"sentences"} placeholder={"Teddy"}
                                   textContentType={"familyName"} onChange={(e) => setLastName(e.nativeEvent.text)}/>
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.titleInput}>Date de naissance</Text>
                        <TextInput style={styles.textInput} keyboardType={"numbers-and-punctuation"}
                                   placeholder={"17/09/1997"} onChange={(e) => setDateOfBirth(e.nativeEvent.text)}/>
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.titleInput}>Adresse mail</Text>
                        <TextInput style={styles.textInput} autoCapitalize={"none"} keyboardType={"email-address"}
                                   placeholder={"mail@mail.fr"} textContentType={"emailAddress"}
                                   onChange={(e) => setEmail(e.nativeEvent.text)}/>
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.titleInput}>Ville</Text>
                        <TextInput style={styles.textInput} autoCapitalize={"sentences"} placeholder={"Paris"}
                                   textContentType={"addressCity"} onChange={(e) => setTown(e.nativeEvent.text)}/>
                    </View>
                    <View style={styles.containerInput}>
                        <Text style={styles.titleInput}>Mot de passe</Text>
                        <TextInput style={styles.textInput} autoCapitalize={"none"} secureTextEntry={true}
                                   textContentType={"password"} onChange={(e) => setPassword(e.nativeEvent.text)}/>
                    </View>
                </View>

                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                        style={styles.buttonShadowConnect}
                        onPress={sendValues}
                    >
                        <LinearGradient style={styles.button} colors={['#FD867E', '#FD7EAC']} start={[0, 0.65]}
                                        end={[0.70, 1]}>
                            <Text style={styles.textButton}>Je m'inscris</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
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
