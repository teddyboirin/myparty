import React, { useState } from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity} from 'react-native';
import axios from "axios";
import {LinearGradient} from "expo-linear-gradient";
import Logo from "../../images/logo.svg";
import {set} from "react-native-reanimated";


export default function Navigation() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [email, setEmail] = useState();
    const [town, setTown] = useState();
    const [password, setPassword] = useState();
    const [submit, setSubmit] = useState(false);


    const sendValues = () => {
        let formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('dateOfBirth', dateOfBirth);
        formData.append('email', email);
        formData.append('town', town);
        formData.append('password', password);
        axios.post("http://localhost:8888/api/", formData)
            .then(
                setSubmit(true)
            )
            .catch(err => console.log(err));
    };

    return (
        <View>
            <View style={styles.header}><Text>Nous rejoindre</Text>
            </View>
            <Text>{firstName}</Text>
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
                    <TextInput style={styles.textInput} autoCapitalize={"sentences"} placeholder={"Teddy"} textContentType={"familyName"} onChange={(e) => setLastName(e.nativeEvent.text)}/>
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.titleInput}>Date de naissance</Text>
                    <TextInput style={styles.textInput} keyboardType={"numbers-and-punctuation"} placeholder={"17/09/1997"} onChange={(e) => setDateOfBirth(e.nativeEvent.text)}/>
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.titleInput}>Adresse mail</Text>
                    <TextInput style={styles.textInput} autoCapitalize={"none"} keyboardType={"email-address"} placeholder={"mail@mail.fr"} textContentType={"emailAddress"} onChange={(e) => setEmail(e.nativeEvent.text)}/>
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.titleInput}>Ville</Text>
                    <TextInput style={styles.textInput} autoCapitalize={"sentences"} placeholder={"Paris"} textContentType={"addressCity"} onChange={(e) => setTown(e.nativeEvent.text)}/>
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.titleInput}>Mot de passe</Text>
                    <TextInput style={styles.textInput} autoCapitalize={"none"} secureTextEntry={"true"} textContentType={"password"} onChange={(e) => setPassword(e.nativeEvent.text)}/>
                </View>
            </View>

            <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                    style={styles.buttonShadowConnect}
                    onPress={sendValues}
                >
                    <LinearGradient style={styles.button} colors={['#FD867E', '#FD7EAC']} start={[0, 0.65]} end={[0.70, 1]} >
                        <Text style={styles.textButton}>Je m'inscris</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        </View>
        );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
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

    },

    secondInputContainerTwoInputs: {
        width: "50%",
        padding: 5,
        justifyContent:"space-between",
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    titleInput: {
        marginBottom: 10
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
    },
});
