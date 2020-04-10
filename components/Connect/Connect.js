import React from 'react';
import {StyleSheet} from 'react-native';
import ConnectForm from "../Forms/ConnectForm";

export default function Connect() {


    return (
        <ConnectForm></ConnectForm>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1
    },
});
