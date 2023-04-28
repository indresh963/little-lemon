import { useReducer, createContext, useContext } from "react";
const reducer = (state, action) => {
    let tempCartItems;
    switch (action.type) {
        case "cartadd":
            tempCartItems = [...state.cartItems];
            if(state.cartItems[action.data.id]){
                tempCartItems[action.data.id].qty++;
            }else{
                tempCartItems[action.data.id] = action.data;
            }
            console.log(tempCartItems,state.totalItem);
            return {
                ...state,
                totalItem:state.totalItem + 1,
                cartItems: tempCartItems
            }
        case "cartremove":
            tempCartItems = [...state.cartItems];
            if(tempCartItems[action.data.id].qty > 1){
                tempCartItems[action.data.id].qty--;
            }
            return {
                ...state,
                totalItem:state.totalItem -1,
                cartItems: tempCartItems
            }
        case "orderonline":
            return {
                ...state,
                orderItems: [...state.orderItems,action.data]
            }
        case "login":
            let pro = action.part;
            return {
                ...state,
                loginDetails: {
                    ...state.loginDetails,
                    pro: action.data
                }
            }
        default:
            pro = action.part;
            return {
                ...state,
                bookingDetails: {
                    ...state.bookingDetails,
                    pro: action.data
                }
            }

    }
}

const DataContext = createContext();

export default function DataProvider({ children }) {
    const initialData = {
        totalItem:0,
        cartItems: [],
        orderItems: [],
        loginDetails: {},
        bookingDetails: {}
    }
    const [state, dispatch] = useReducer(reducer, initialData);
    function myFun(role,info,sect){
        dispatch({
            type : role,
            data : info,
            part : sect
        })
    }
    return (
        <DataContext.Provider value={
            {
                totalItem : state.totalItem,
                cartItems : state.cartItems,
                orderItems :state.orderItems,
                loginDetails :state.loginDetails,
                bookingDetails :state.bookingDetails,
                myFun
            }
        } >
            {children}
        </DataContext.Provider>
    )
}

export const useDataProvider = () => useContext(DataContext);