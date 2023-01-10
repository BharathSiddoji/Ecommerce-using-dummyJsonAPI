export const addToCart ="ADD_TO_CART"
export const removeFromCart ="REMOVE_ITEM"

export const addItem =(data)=>{
    return {
        type:addToCart,
        payload:data
    }
}

export const removeItem =(data)=>{
    return {
        type:removeFromCart,
        payload:data

    }
}