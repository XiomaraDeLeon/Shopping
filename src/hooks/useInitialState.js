import React, { useState } from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)
    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFormCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id != payload.id)
        })
    }

    return {
        state,
        addToCart,
        removeFormCart
    }
}

export default useInitialState;