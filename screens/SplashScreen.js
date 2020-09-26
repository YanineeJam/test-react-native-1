// rnc autogen
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native'
import MainTab from './MainTab';
const Mickey = require('../assets/react.png');

export default class SplashScreen extends Component {
    clickHandler = () => {
        // Alert.alert('Clicked');
        MainTab();
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={Mickey} style={styles.image}/>
                <Text style={styles.text}> Welcome to React </Text>
                <Button 
                style ={styles.button} 
                title="Start App" 
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
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 26,
        margin: 4,
    },
    button: {
        width: 80,
      },
});