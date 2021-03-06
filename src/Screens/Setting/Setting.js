import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    TextInput
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Setting = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const [email, onChangeEmail] = React.useState("hishmatrai.2018@gmail.com");
    const [password, onChangePassword] = React.useState("hishmatrai");
    const [editEmail, setEditEmail] = useState(false);
    const [editPassword, setEditPassword] = useState(false);

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });
    return (
        <View style={styles.container}>
            <View style={styles._header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles._heading}>Settings</Text>
                <Text style={styles._heading}></Text>
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles._main} >
                    {editEmail ?
                        <View style={styles._email_input_main}>
                            <TextInput
                                placeholder="Email"
                                style={styles._input}
                                underlineColor="white"
                                placeholderTextColor="white"
                                value={email}
                                onChangeText={onChangeEmail}
                                editable={true}
                                returnKeyType={"next"}
                                autoFocus={true}
                            />
                            <TouchableOpacity onPress={() => setEditEmail(!editEmail)}>
                                <Feather name="check" size={24} color="white" />

                            </TouchableOpacity>
                        </View> : <View style={styles._email_input_main}>
                            <TextInput
                                placeholder="Email"
                                style={styles._input}
                                underlineColor="white"
                                placeholderTextColor="white"
                                value={email}
                                onChangeText={onChangeEmail}
                                editable={false}

                            />
                            <TouchableOpacity onPress={() => setEditEmail(!editEmail)}>
                                <MaterialIcons name="edit" size={24} color="white" />
                            </TouchableOpacity>
                        </View>}

                    {editPassword ?
                        <View style={styles._email_input_main}>
                            <TextInput
                                placeholder="Email"
                                style={styles._input}
                                underlineColor="white"
                                placeholderTextColor="white"
                                value={password}
                                onChangeText={onChangePassword}
                                editable={true}
                                returnKeyType={"next"}
                                autoFocus={true}
                                secureTextEntry={true}
                            />
                            <TouchableOpacity onPress={() => setEditPassword(!editPassword)}>
                                <Feather name="check" size={24} color="white" />

                            </TouchableOpacity>
                        </View> : <View style={styles._email_input_main}>
                            <TextInput
                                placeholder="Email"
                                style={styles._input}
                                underlineColor="white"
                                placeholderTextColor="white"
                                value={password}
                                onChangeText={onChangeEmail}
                                editable={false}
                                secureTextEntry={true}
                            />
                            <TouchableOpacity onPress={() => setEditPassword(!editPassword)}>
                                <MaterialIcons name="edit" size={24} color="white" />
                            </TouchableOpacity>
                        </View>}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#014F92",
    },
    _heading: {
        color: "white",
        fontSize: 25,
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5,
    },
    _main: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    _header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 50,
        paddingHorizontal: 20
    },
    _email_input_main: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 5,
        marginTop: 10,
        height: 50,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    _input: {
        color: "white",
        width: "80%",
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5,
    },
});

export default Setting;