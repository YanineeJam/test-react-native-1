import React from 'react'
import { View, Text, StyleSheet, Image,TouchableNativeFeedback } from 'react-native'
import {Ionicons} from 'react-native-vector-icons/Ionicons'

//create component
const ImageItem = (props) => {
    return (
        <TouchableNativeFeedback onPress={props.deleteItem}>
        <View style = {StyleSheet.container}>
            <Image source={props.source} style={styles.image}/>
            <Text style={styles.text}>{props.description}</Text>
        </View>
        </TouchableNativeFeedback>
    )
};


const styles = StyleSheet.create({
    // column คือบอกว่าอะไรก็ตามที่อยู่ใต้ container นี้จะเรียงตัวตามตั้ง   ถ้าอยากให้เรียงตามแนวนอนก็ใส่ FlexDirection: 'row'
    //Justify คือคำสั่งการจัดการกับแกนหลัก
    // Align Items คือคำสั่งการจัดการกับแกนรอง
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'flex-start',

        margin: 4,
        borderWidth:1,
        borderColor: 'gold',
        backgroundColor: 'skyblue'},

    image: {
        width: 64, 
        height: 64, 
        resizeMode: 'contain',
        margin: 4,
        justifyContent: 'flex-start'},
    text: {
        color: 'brown',
        fontWeight: 'bold',
        fontSize: 26,
        margin: 4,
    },
  
});
export default ImageItem;