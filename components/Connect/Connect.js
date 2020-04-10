import React from 'react';
import {StyleSheet} from 'react-native';
import ConnectForm from "../Forms/ConnectForm";

export default function Connect(navigation) {


    return (
        <ConnectForm navigation={navigation}></ConnectForm>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1
    },
});
