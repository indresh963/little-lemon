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
            tempCartItems[action.data.id].qty--;
            return {
                ...state,
                totalItem:state.totalItem -1,
                cartItems: tempCartItems
            }
        case "cartdelete":
            tempCartItems = [...state.cartItems];
            tempCartItems[action.data.id] = undefined;
            return {
                ...state,
                totalItem:state.totalItem - action.data.qty,
                cartItems: tempCartItems
            }
        case "orderonline":
            return {
                ...state,
                orderItems: [...state.orderItems,action.data]
            }
        case "addUser":
            return {
                ...state,
                usersList: [
                    ...state.usersList,
                    action.data
                ]
            }
        case "login":
            return {
                ...state,
                isLoggedIn : true,
                activeUser : action.data,
            }
        default:
            return {
                ...state,
                bookingDetails: {
                    ...state.bookingDetails,
                }
            }

    }
}

const DataContext = createContext();

export default function DataProvider({ children }) {
    const initialData = {
        isLoggedIn:false,
        totalItem:0,
        cartItems: [],
        orderItems: [],
        usersList:[],
        bookingDetails: {},
        activeUser:undefined
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
                isLoggedIn : state.isLoggedIn,
                totalItem : state.totalItem,
                cartItems : state.cartItems,
                orderItems :state.orderItems,
                usersList :state.usersList,
                bookingDetails :state.bookingDetails,
                activeUser : state.activeUser,
                myFun
            }
        } >
            {children}
        </DataContext.Provider>
    )
}

export const useDataProvider = () => useContext(DataContext);