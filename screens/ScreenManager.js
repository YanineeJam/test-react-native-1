import {Navigation} from 'react-native-navigation';
import SplashScreen from './SplashScreen';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import InfoScreen from './InfoScreen';
import ImagePickerScreen from './ImagePickerScreen';
import RegisterScreen from './RegisterScreen'
import ShowListScreen from './ShowListScreen';
import RegisterFirstScreen from './RegisterFirstScreen'
import configureStore from '../store/reducers/configureStore';
import {Provider} from 'react-redux';
import React from 'react';

const store = configureStore();
//register ตัว SplashScreen เพื่อให้ใช้งาน navigation ได้
Navigation.registerComponent('RegisterFirstScreen', () => RegisterFirstScreen);
Navigation.registerComponent('MySplashScreen', () => SplashScreen);
Navigation.registerComponent('FirstScreen', () => FirstScreen);
Navigation.registerComponent('SecondScreen', () => SecondScreen);
// Navigation.registerComponent('ThirdScreen', () => ThirdScreen);
Navigation.registerComponent(
    'ThirdScreen', 
    () => (props) =>(
    <Provider store={store}>
        <ThirdScreen {...props}/>
    </Provider>
    ),
    () => ThirdScreen,
);
Navigation.registerComponent(
    'ShowListScreen', 
    () => (props) =>(
    <Provider store={store}>
        <ShowListScreen {...props}/>
    </Provider>
    ),
    () => ShowListScreen,
);
Navigation.registerComponent('InfoScreen', () => InfoScreen);
// Navigation.registerComponent('ImagePickerScreen', () =>ImagePickerScreen);
Navigation.registerComponent(
    'ImagePickerScreen',
    () => (props) =>(
    <Provider store={store}>
        <ImagePickerScreen {...props}/>
    </Provider>
    ),
    () => ImagePickerScreen,
    );

Navigation.registerComponent(
    'RegisterScreen',
    () => (props) =>(
    <Provider store={store}>
        <RegisterScreen {...props}/>
    </Provider>
    ),
    () => RegisterScreen,
    );
    
// set ว่าให้ splash เป็นหน้าแรก
Navigation.events().registerAppLaunchedListener(async () => {
Navigation.setRoot({
    root: {
        component: {
            name: 'MySplashScreen',
            // name: 'SignupScreen',
        },
        options: {
            // topBar จะใช้ได้ก็ต่อเมื่อ screen แต่ละอันต้องเป็น stack คือเอามาซ้อนกันได้
            topBar: {
                title: {text: 'MySplashScreen'},
            },
        },
    },
  });
});