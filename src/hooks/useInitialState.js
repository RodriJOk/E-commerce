import React, {useState} from 'react';

const initialState = {
    card:[],
}

const useInitialState = () =>{
    const [state, setstate] = useState(initialState)

    const addToCard = (payload) =>{
        setstate({
            ...state,
            card: [...state.card, payload],
        })
    };

    const removeToCard= (payload)=>{
        setstate({
            ...state,
            card: state.card.filter(item => item.id !== payload.id)
        })
    }

    return {
        state,
        addToCard,
        removeToCard
    }
}

export default useInitialState;