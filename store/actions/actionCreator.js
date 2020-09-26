import {ADD_IMAGE, DELETE_IMAGE, SHOW_ITEM} from './actionTypes';

export const addImage = (imgData) => {
    return {
        type: ADD_IMAGE,
        image: imgData.image,
        description: imgData.description,
        // name: imgData.name,
        // lastname: imgData.lastname,
    };
};

export const deleteImage = (key) => {
    // key == id ของรูปที่เราจะลบ
    return {
        type: DELETE_IMAGE,
        imageKey: key,
    };
};

export const showItem = (key) => {
    return {
        type: SHOW_ITEM,
        
    };

}