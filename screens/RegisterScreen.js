import React, { Component } from 'react'
import { TextInput, View, StyleSheet,Image, Button } from 'react-native'
import {Navigation} from 'react-native-navigation'
import ImagePicker from 'react-native-image-picker'
import {connect} from 'react-redux'
import {addImage} from '../store/actions/actionCreator'
const placeholder = require('../assets/photo.png')

class RegisterScreen extends Component {
    // เราต้องการจะเก็บรูปนี้ไว้เพราะฉะนั้นต้องสร้าง state มารับรูปไว้
    state = {
        image: null,
        description: null,
        name: null,
        lastname: null,
        email: null,
        age: null,
    };
    // เมื่อเราปิดหน้าจอ function นี้จะทำงาน
    componentWillUnmount(){
        this.setState({image: null, 
            description: null,
            name: null,
            lastname: null,
            email: null,
            age: null,
    })};

    selectImageHandler = () => {
        const options = {
            title: 'Photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (result) => {
            if (result.didCancel) console.log('User cancelled image pickin');
            else if (result.error) console.log('Image picker error', result.error);
            else {
                this.setState({
                    image: {uri: result.uri},
                });
            } 
        });
    };
    addImageHandler = () => {
        if (this.state.image == null || this.state.description == null ){
            return;
        }
        this.props.onAddImage({
            image: this.state.image,
            description: this.state.description,
        });
        this.cancelHandler();
    };
    textChangeHandler = (text) => {
        console.log(text);
        this.setState({description: text});
    };
    nameChangeHandler = (text) => {
        console.log(text);
        this.setState({name: text});
    };
    lastnameChangeHandler = (text) => {
        console.log(text);
        this.setState({lastname: text});
    };
    emailChangeHandler = (text) => {
        console.log(text);
        this.setState({email: text});
    };
    ageChangeHandler = (text) => {
        console.log(text);
        this.setState({age: text});
    };
    
    cancelHandler = () => {
        Navigation.pop(this.props.componentId);
    }; 
    render() {
        let imageSource;
        if (this.state.image != null) imageSource = this.state.image;
        else imageSource = placeholder;
        return (
            <View style={styles.container}>
                <View style={styles.imagecontainer}>
                    <Image style={styles.image} source={imageSource}/>
                    <TextInput style={styles.textinput} 
                    placeholder = 'First Name'
                    onChangeText={this.nameChangeHandler}/>
                     <TextInput style={styles.textinput}
                    placeholder = 'Last Name' 
                    onChangeText={this.lastnameChangeHandler}/>
                    <TextInput style={styles.textinput}
                    placeholder = 'Email'
                    onChangeText = {this.emailChangeHandler} />
                    <TextInput style={styles.textinput}
                    placeholder = 'Age'
                    onChangeText = {this.ageChangeHandler} />

                </View>
                <View style={styles.buttoncontainer}>
                    {/* <Button title="Add Image" */}
                    <Button title="OK"
                    onPress = {this.addImageHandler}/>
                    {/* <Button title="Select Image" */}
                    <Button title="Photo"
                    onPress ={this.selectImageHandler}/>
                    <Button title="Cancel"
                    onPress = {this.cancelHandler}/>
                </View>
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAddImage: (image) => dispatch(addImage(image)),
    };
};
// จะทำให้ imagepickerscreen add image ได้ 
export default connect(null, mapDispatchToProps)(RegisterScreen);
// export default ImagePickerScreen;
const styles = StyleSheet.create({
    // column คือบอกว่าอะไรก็ตามที่อยู่ใต้ container นี้จะเรียงตัวตามตั้ง   ถ้าอยากให้เรียงตามแนวนอนก็ใส่ FlexDirection: 'row'
    //Justify คือคำสั่งการจัดการกับแกนหลัก
    // Align Items คือคำสั่งการจัดการกับแกนรอง
    container: {flex: 1,
         justifyContent: 'center', 
         alignItems: 'center'},
    imagecontainer : {width: '100%', 
    alignItems: 'center', 
    padding: 20},
    buttoncontainer: {width: '80%',
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-evenly'},
    image: {width: 150, height: 170, 
        borderColor: 'black', 
        borderWidth: 1},
    textinput: {marginTop: 10,
        width: '90%',
        borderColor: 'pink',
        borderWidth: 1,
        height: 40,},
    
    
   
});