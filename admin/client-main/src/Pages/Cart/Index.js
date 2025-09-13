

import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const CartPage = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            name: 'Adidas Running Shoes',
            price: 2499,
            quantity: 1,
            image: 'https://cmsimages.shoppersstop.com/Adidasweb_3bc7f319cf/Adidasweb_3bc7f319cf.png',
        },
        {
            id: 2,
            name: 'Nike Hoodie',
            price: 1799,
            quantity: 2,
            image: 'https://cmsimages.shoppersstop.com/Adidasweb_3bc7f319cf/Adidasweb_3bc7f319cf.png',
        },
        {
            id: 3,
            name: 'Puma',
            price: 1699,
            quantity: 3,
            image: 'https://cmsimages.shoppersstop.com/Adidasweb_3bc7f319cf/Adidasweb_3bc7f319cf.png',
        },
        {
            id: 4,
            name: 'Bata',
            price: 1899,
            quantity: 4,
            image: 'https://cmsimages.shoppersstop.com/Adidasweb_3bc7f319cf/Adidasweb_3bc7f319cf.png',
        },
    ]);

    const increaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cartPage container py-4">
            <h2>Your Shopping Cart</h2>
            <div className="table-respnsive">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price (₹)</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <div className="cartItemimgWrapper d-flex gap-3 align-items-center">
                                        <div className="imgWrapper">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="info">
                                            <h6>{item.name}</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>₹{item.price}</td>
                                <td>
                                    <div className="quantityDrop d-flex align-items-center gap-2">
                                        <button className="btn btn-outline-secondary btn-sm" onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button className="btn btn-outline-secondary btn-sm" onClick={() => increaseQuantity(item.id)}>+</button>
                                    </div>
                                </td>
                                <td>₹{item.price * item.quantity}</td>
                                <td>
                                    <div className="remove" onClick={() => removeItem(item.id)}>
                                        <FaTrash />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="text-end mt-4">
                    <h4>Total: ₹{getTotalPrice()}</h4>
                    <button className="btn btn-success mt-2 d-flex align-items-center gap-2">
                        <i className="bi bi-bag-check-fill"></i> {/* Bootstrap icon */}
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
