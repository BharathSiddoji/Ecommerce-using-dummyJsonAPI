export const addItem ="ADD_TO_CART"
export const removeFromCart ="REMOVE_ITEM"

export const addToItem =(data)=>{
    return {
        type:addItem,
        payload:data
    }
}

export const removeItem =(data)=>{
    return {
        type:removeFromCart,
        payload:data

    }
}