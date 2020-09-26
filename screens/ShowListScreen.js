import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, } from 'react-native'
import ImageItem from '../components/ImageItem'
import {connect} from 'react-redux'
import {deleteImage} from '../store/actions/actionCreator'
// import {showItem} from '../store/actions/actionCreator'
import Icon from 'react-native-vector-icons/Ionicons';


class ShowListScreen extends Component {
    deleteItemHandler = (key) => {
        this.props.onDeleteImage(key);
    };
    // showItemHandler = (key) => {
    //     this.props.onShowItem(key);
    // }
    renderItem = (data) => {
        return (
        <ImageItem 
            key={data.item.key}
            source = {data.item.image} 
            deleteItem={() => this.deleteItemHandler(data.item.key)} 
            description ={data.item.descrition}/>
            
            )
    };
    render() {
        let output;
        if (this.props.images == null || this.props.images.length <=0)
            output = <Text style={styles.text}>No Image Available</Text>
        else output = <FlatList
        style={styles.list} 
        data={this.props.images}
        renderItem={this.renderItem}/>;
        return (
            <View style={styles.container}>
                <Text style={styles.text}> {output}</Text>
            </View>
        );
    }
}
//ดึงข้อมูลมาจาก central store
const mapStateToProps = (state) => ({images: state.imageStore.images})

//ส่งข้อมูลที่เราอยากลบ ไปยัง central store
const mapDispatchToProps = (dispatch) => ({
    onDeleteImage: (key) => dispatch(deleteImage(key)), 
    // onShowItem: (key) => dispatch(showItem(key))
    
});


//ดึงข้อมูลจาก central store ผ่าน props
export default connect(mapStateToProps, mapDispatchToProps)(ShowListScreen);
const styles = StyleSheet.create({
    // column คือบอกว่าอะไรก็ตามที่อยู่ใต้ container นี้จะเรียงตัวตามตั้ง   ถ้าอยากให้เรียงตามแนวนอนก็ใส่ FlexDirection: 'row'
    //Justify คือคำสั่งการจัดการกับแกนหลัก
    // Align Items คือคำสั่งการจัดการกับแกนรอง
    container: {flex: 1,
         justifyContent: 'flex-start', 
         alignItems: 'center',
         backgroundColor: 'skyblue'},
    text: {
        fontSize: 26,
        margin: 4,
    },
    list: {
        width: '100%',

    },
    button: {
        width: 80,
      },
});