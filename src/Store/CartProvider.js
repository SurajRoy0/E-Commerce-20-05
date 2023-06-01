import React, { useState, useEffect, useContext } from 'react';
import CartContext from './cart-context';
import axios from 'axios';
import AuthContext from './auth-context';

const CartProvider = (props) => {
    const userEmail = JSON.parse(localStorage.getItem('user-auth-token'));
    const [cartItems, setCartItems] = useState([]);
    const [totalCartAmount, setTotalCartAmount] = useState(0);

    const authCtx = useContext(AuthContext)

    const fetchedStoredData = () => {
        let fetchedItems = [];
        let fetchedTotalAmount = 0;
        axios
            .get(`https://react-e-commerce-sharpener-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${userEmail?.email}-cart-items.json`)
            .then((response) => {
                fetchedItems = response.data;
                fetchedTotalAmount = fetchedItems?.reduce((currentAmount, item) => {
                    return currentAmount + item.price;
                }, 0);
                if (response.data != null) {
                    setCartItems(fetchedItems)
                    setTotalCartAmount(fetchedTotalAmount)
                }

            })
            .catch((error) => {
                console.error(error);
            });

    }
    useEffect(() => {
        if (authCtx.isLoggedIn) {

            fetchedStoredData();
        } else {
            setCartItems([])
            setTotalCartAmount(0)
        }

    }, [authCtx.isLoggedIn]);

    const addItemToCartHandler = (item) => {
        const existingCartItem = cartItems?.find((product) => product.id === item.id);
        let updatedItems;
        if (existingCartItem !== undefined) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + item.amount,
            };

            updatedItems = cartItems?.map((product) =>
                product.id === item.id ? updatedItem : product
            );
        } else {
            updatedItems = [...cartItems, item];
            console.log(updatedItems)
        }

        axios
            .put(`https://react-e-commerce-sharpener-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${userEmail.email}-cart-items.json`, updatedItems)
            .then((response) => {
                fetchedStoredData();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const removeItemFromCartHandler = (id) => {
        const existingCartItem = cartItems.find((product) => product.id === id);
        let updatedItems;
        if (existingCartItem.amount === 1) {

            updatedItems = cartItems.filter((product) => product.id !== id);

        } else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1,
            };
            updatedItems = cartItems.map((product) =>
                product.id === id ? updatedItem : product
            );
        }
        axios
            .put(`https://react-e-commerce-sharpener-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${userEmail.email}-cart-items.json`, updatedItems)
            .then((response) => {
                fetchedStoredData();
                if (updatedItems.length === 0) {
                    setCartItems([])
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };


    const removeAllItemsFromCartHandler = () => {
        axios
            .put(`https://react-e-commerce-sharpener-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${userEmail.email}-cart-items.json`, [])
            .then((response) => {
                fetchedStoredData();
                setCartItems([])
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const cartContext = {
        items: cartItems,
        totalAmount: totalCartAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        removeAllItems: removeAllItemsFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
