import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Animated
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const ConstituentPoll = (props) => {
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

    let PollCardData = [
        {
            data: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. "
        },
        {
            data: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. "
        },
        {
            data: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. "
        },
        {
            data: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. "
        },
        {
            data: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. "
        },
        {
            data: "Doing multiple selections is not allowed. Duplication checks are based on the IP address of the voter. "
        },
    ]

    return (
        <View style={styles.container}>

            <View >
                <ScrollView style={{width: screen.width}} horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true}>

                        {PollCardData.map((v, i) => {
                            return (
                                <View style={[styles._data_main,{width: screen.width}]} key={i}>
                                    <View style={styles._header}>
                                        <Text style={styles._heading}>POLL</Text>
                                        <TouchableOpacity onPress={() => props.navigation.navigate("Setting")}>
                                            <Ionicons name="settings-outline" size={44} color="white" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles._counter_main}>
                                        <CountdownCircleTimer
                                            isPlaying
                                            duration={10}
                                            colors={[
                                                ['white', 0.4],
                                                // ['#F7B801', 0.4],
                                                // ['#A30000', 0.2],
                                            ]}
                                            size={30}
                                            strokeWidth={2}
                                            trailColor="#1ED760"
                                        >
                                            {({ remainingTime, animatedColor }) => (
                                                <Animated.Text style={styles._timer}>
                                                    {remainingTime}
                                                </Animated.Text>
                                            )}
                                        </CountdownCircleTimer>
                                    </View>
                                    <View>
                                        <Text style={styles._poll}>Poll : </Text>
                                        <Text style={styles._poll_Des}>{v.data}</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.button}
                                    >
                                        <Text style={styles._button_txt}>Approve</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.button}
                                    >
                                        <Text style={styles._button_txt}>Disapprove</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.button}
                                    >
                                        <Text style={styles._button_txt}>No Opinion</Text>
                                    </TouchableOpacity>
                                    <Text style={styles._total_poll}>{i + 1} / {PollCardData.length}</Text>
                                </View>
                            )
                        })}
                </ScrollView>
            </View>
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
    button: {
        width: "100%",
        alignSelf: "center",
        backgroundColor: "#1ED760",
        height: 50,
        marginBottom: 20,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    _button_txt: {
        fontFamily: "Poppins-SemiBold",
        color: "white",
        fontSize: 20,
        letterSpacing: 0.5
    },
    _timer: {
        color: "white",
        fontFamily: "Poppins-SemiBold",
        marginBottom: -5
    },
    _data_main: {
        // borderColor: "white",
        // borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        // width:"1%",
        // flex:1
    },
    _counter_main: {
        alignSelf: "flex-end",
        flexDirection: "row",
        marginTop:50
    },
    _poll: {
        color: "white",
        fontFamily: "Poppins-SemiBold",
        letterSpacing: 0.5,
        fontSize: 20
    },
    _poll_Des: {
        color: "white",
        fontFamily: "Poppins-Medium",
        letterSpacing: 0.5,
        marginBottom: 50
    },
    _main: {
        flexDirection: "row",
    },
    _total_poll: {
        color: "white",
        alignSelf: "center",
        fontFamily: "Poppins-SemiBold",
    },
    _header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        marginBottom: 40,

    },
});

export default ConstituentPoll;