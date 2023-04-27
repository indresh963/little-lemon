import { useReducer, createContext, useContext } from "react";
const reducer = (state, action) => {
    switch (action.type) {
        case "cart":
            console.log(action.type)
            return {
                ...state,
                cartItems: [...state.cartItems,action.data]
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