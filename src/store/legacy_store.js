import {legacy_createStore as createStore} from 'redux';

const reducerFn = (state = {counter: 0}, action) => {
    //synchronous function
    // we should not mutate the original state


    if(action.type === "INCREMENT") {
        return { counter: state.counter + 1 };
    }
    

    if(action.type === "DECREMENT") {
        return { counter: state.counter - 1 };
    }


    if(action.type === "ADD") {
        return { counter: state.counter + action.payload };
    }


    return state;
};


const store = createStore(reducerFn);

export default store;