import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`https://flipkartclone-nu.vercel.app/product/${id}`);
        dispatch({ 
            type: actionTypes.ADD_TO_CART, 
            payload: { ...data, quantity }
        });
    } catch (error) {
        console.log('Error while adding to cart', error);
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

};