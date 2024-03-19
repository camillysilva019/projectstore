import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Inicio() {



    const navigation = useNavigation();
    return (
        
        <SafeAreaView style={[styles.container]}>
                    <Image source={require('../../assets/channel.png')} style={{width: 155, height: 100}}>
        </Image>
            <Text></Text>
            <Text> Welcome to Chanel, where fashion meets personality.</Text>
            <Text> With a diverse selection of apparel and accessories,</Text>
            <Text> we cater to men and women who appreciate quality.</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})