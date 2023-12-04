import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    // Thực hiện các xử lý thanh toán ở đây (nếu cần)
    // Ví dụ: Gửi dữ liệu giỏ hàng lên server, xử lý thanh toán, vv.

    // Hiển thị cảnh báo khi thanh toán thành công
    alert('Thanh toán thành công!');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Giỏ hàng trống rỗng</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">Giá: ${item.price}</p>
                </div>
                <button
                  className="cart-item-remove-btn"
                  onClick={() => removeFromCart(item)}
                >
                  Xóa khỏi giỏ hàng
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p className="cart-total-text">Tổng giá tiền: ${getTotalPrice()}</p>
            <button className="cart-checkout-btn" onClick={handleCheckout}>
              Thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
