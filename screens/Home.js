import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                    source={require('../assets/homebg.png')}
                    style={styles.backgorundImage}>

                   
                    <TouchableOpacity
                        style={styles.routeCard}
                        onPress={() => this.props.navigation.navigate("Gta3")}
                    >
                        <Text style={styles.routeText}> Gta 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.routeCard}
                        onPress={() => this.props.navigation.navigate("GtaSA")}
                    >
                        <Text style={styles.routeText}> Gta San Andreas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.routeCard}
                        onPress={() => this.props.navigation.navigate("GtaVC")}
                    >
                        <Text style={styles.routeText}> Gta Vice City</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    backgorundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    routeText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 30,
        paddingLeft: 30,
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 150,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    iconImage: {
        position: 'absolute',
        height: 200,
        width: 200,
        resizeMode: 'contain',
        right: 20,
        top: -80,
    },
})