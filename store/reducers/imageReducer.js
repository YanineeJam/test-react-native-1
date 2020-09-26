import {ADD_IMAGE, DELETE_IMAGE} from '../actions/actionTypes';

const initialState = {
    images: [],
};

const reducer = (state = initialState, action) => {
    // การเลือกแบบมีเงื่อนไขว่า ถ้า typ เป็นแบบใน case นี้ จะทำอย่างงี้
    switch(action.type) {
        case ADD_IMAGE:
            return{
                // copy state เก่าลงมาเพราะว่าถ้าเราไม่ copy 
                ...state,
                //แล้วเอามาสร้าง state ใหม่ที่มีการ add รูป
                images: state.images.concat({
                    image: action.image,
                    description: action.description,
                    key: Math.random().toString(), 
                }),
                
            };
        case DELETE_IMAGE:
            //สร้าง array ใหม่ไปแทนที่ โดยที่อันใหม่จะโดยที่เอาสมาชิกตัวเดิมทุกตัวยกเว้นตัวที่เราต้องการจะลบ
            return{
                ...state,
                images: state.images.filter((image) => image.key != action.imageKey),
            };
        default:
            return state;
    }
};

export default reducer;