import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {Navigation} from 'react-native-navigation';
export default class RegiterFirstScreen extends Component {
    clickHandler = () => {
        // เอาหน้า info มาซ้อนบน first screen
        Navigation.push(this.props.componentId, {
            component: {
                name: 'RegisterScreen',
                // name: 'ImagePickerScreen',
            },
            options: {
                topBar: {
                    title: {text: 'RegisterScreen'},
                    // title: {text: 'ImagePickerScreen'},
                },
            },
        });
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Register Here </Text>
                <Button title="Register"
                onPress={this.clickHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // column คือบอกว่าอะไรก็ตามที่อยู่ใต้ container นี้จะเรียงตัวตามตั้ง   ถ้าอยากให้เรียงตามแนวนอนก็ใส่ FlexDirection: 'row'
    //Justify คือคำสั่งการจัดการกับแกนหลัก
    // Align Items คือคำสั่งการจัดการกับแกนรอง
    container: {flex: 1,
         justifyContent: 'center', 
         alignItems: 'center'},
    text: {
        fontSize: 26,
        margin: 4,
    },
    button: {
        width: 80,
      },
});