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
import { MaterialIcons } from '@expo/vector-icons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
import { Checkbox, VStack, Center, NativeBaseProvider } from "native-base"
const CityPolls = (props) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange);
        };
    });


    let Polls = [
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },
        {
            data: "The Top 5 Email Design Trends to Watch for in 2019 The Top 5 Email Design Trends to Watch for in 2019"
        },



    ]
    return (
        <View style={styles.container}>
            <View style={styles._header}>
                <Text style={styles._heading}>POLLS</Text>
                {/* <TouchableOpacity onPress={() => props.navigation.navigate("PollSelect")}>
                    <Ionicons name="ios-shield-checkmark" size={34} color="white" />
                </TouchableOpacity> */}
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles._main} >
                    {Polls.map((v, i) => {
                        return (
                            <View style={styles._card} key={i}>
                                <View style={styles._card1}>
                                    <Checkbox value="danger" colorScheme="green" />
                                </View>
                                <View style={styles._card2}>
                                    <TextInput
                                        value={v.data}
                                        style={styles._poll_Des}
                                        underlineColor="white"
                                        placeholderTextColor="white"
                                        multiline={true}
                                    />
                                </View>
                                <View style={styles._card3}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => props.navigation.navigate("PollResult")}
                                    >
                                        <Text style={styles._button_txt}>View</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                </View>
                <View style={styles._more_main}>
                    <TouchableOpacity style={styles.button2}  onPress={()=> props.navigation.navigate("CreatePoll")}>
                        <MaterialIcons name="add" size={34} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button3}>
                        <Text style={styles._button_txt2}>View More</Text>
                    </TouchableOpacity>
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
        fontSize: 50,
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5,
    },
    _header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 50,
        paddingHorizontal: 20
    },
    _main: {
        paddingHorizontal: 20,
        paddingTop: 20
    },
    _poll_Des: {
        color: "white",
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5,
        textAlign: 'justify'
    },
    _card: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    button: {
        width: 50,
        alignSelf: "flex-end",
        backgroundColor: "#1ED760",
        height: 25,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    _button_txt: {
        fontFamily: "Poppins-SemiBold",
        color: "white",
        fontSize: 12,
        letterSpacing: 0.5
    },
    _card1: {
        width: "10%"
    },
    _card2: {
        width: "65%"
    },
    _card3: {
        width: "20%"
    },
    button2: {
        backgroundColor: "#1ED760",
        height: 50,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width:"30%"
    },
    button3: {
        backgroundColor: "#1ED760",
        height: 50,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width:"50%"
    },
    _button_txt2: {
        fontFamily: "Poppins-SemiBold",
        color: "white",
        fontSize: 20,
        letterSpacing: 0.5
    },
    _more_main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 50,
        marginBottom: 20,
        marginHorizontal: 20
    }
});

export default CityPolls;