import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

// create function MainTab
const MainTab = () => {
    // การใช้งานแบบ asynchronus load รูปทั้ง 3 ไปเก็บไว้ใน icons
    Promise.all([
        // Icon.getImageSource("flower-outline", 30),
        // Icon.getImageSource("heart-circle-outline", 30),
        // Icon.getImageSource("leaf-outline", 30),
        Icon.getImageSource("create", 30),
        Icon.getImageSource("menu", 30),
    ]).then(icons => {
        // บอกว่าถ้าคลิ๊กปุ่มเราจะเปลี่ยนหน้าแรกใหม่
        // Navigation.events().registerAppLaunchedListener(async () => {
            Navigation.setRoot({
              root: {
                bottomTabs: {
                // children เป็น array ที่เก็บ screen เราว่ามีอะไรบ้าง อย่างของเราตอนนี้มี 3 Screens
                  children: [
                    // {
                    //   stack: {
                    //     children: [
                    //       {
                    //         component: {
                    //         // Name ตรงนี้ต้องชื่อเดียวกับที่เรา registrer ไว้
                    //           name: 'FirstScreen',
                    //           options: {
                    //               topBar: {
                    //                   title: {text: 'First Screen'},
                    //               },
                    //               bottomTab: {
                    //                   text: 'First Screen',
                    //                   icon: icons[0],
                    //                   iconColor: 'yellow',
                    //                   selectedIcon: 'orange',
                    //                   selectedTextColor: 'gray',
                    //               },
                    //           },
                    //         },
                    //       },
                    //     ],
                    //   },
                    // },
                    // {
                    //   stack: {
                    //     children: [
                    //       {
                    //         component: {
                    //           name: 'SecondScreen',
                    //           options: {
                    //             bottomTab: {
                    //                 text: 'Second Screen',
                    //                 // icon: icons[1],
                    //                 icon: icons[0],
                    //                 iconColor: 'pink',
                    //                 selectedIcon: 'red',
                    //                 selectedTextColor: 'gray',
                    //             },
                    //           },
                    //         },
                    //       },
                    //     ],
                    //   },
                    // },
                    {
                      stack: {
                        children: [
                          {
                            component: {
                              name: 'RegisterFirstScreen',
                              options: {
                                bottomTab: {
                                    text: 'RegisterFirstScreen',
                                    // icon: icons[1],
                                    icon: icons[0],
                                    iconColor: 'pink',
                                    selectedIcon: 'red',
                                    selectedTextColor: 'gray',
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                    {
                      stack: {
                        children: [
                          {
                            component: {
                              // name: 'ThirdScreen',
                              name: 'ShowListScreen',
                              options: {
                                bottomTab: {
                                    // text: 'Third Screen',
                                    text: 'Show List',
                                    // icon: icons[2],
                                    icon: icons[1],
                                    iconColor: 'green',
                                    selectedIcon: 'brown',
                                    selectedTextColor: 'gray',
                                },
                              },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              }
            });
          });          
    // });
};

export default MainTab;