import React from "react";
import "./Cart.css";
import product from "../../img/hourse.svg";
import subtle from "../../img/subtle.svg"
import Potter from "../../img/Potter.svg"
import { GrNext } from "react-icons/gr";

const Cart = () => {
  return (
    <div id="cart">
      <div className="container">
        <div className="cart">
          <h1>Your cart</h1>
          <h4>Not ready to checkout?<span> Continue Shopping</span></h4>
          <div className="shopping">
            <div className="horse">
              <img src={product} alt="" />
              <div className="texts">
                <div className="t1">
                <h2>THE BOY, THE MOLE, THE FOX AND <br /> THE HORSE</h2>
                <h5>by Charlie Mackesy</h5>
                </div>
                <div className="t2">
                  <h3>Quantity: 1</h3>
                  <h2>$99</h2>
                </div>
              </div>
              <button>Remove</button>
            </div>
          </div>
          <div className="border"></div>
          <div className="shopping">
            <div className="horse">
              <img src={subtle} alt="" />
              <div className="texts">
                <div className="t1">
                <h2>THE SUBTLE ART OF NOT GIVING A <br /> F*CK</h2>
                <h5>by Mark Manson</h5>
                </div>
                <div className="t2">
                  <h3>Quantity: 1</h3>
                  <h2>$99</h2>
                  
                </div>
              </div>
              <button>Remove</button>
            </div>
          </div>
          <div className="border"></div>
          <div className="shopping">
            <div className="horse">
              <img src={Potter} alt="" />
              <div className="texts">
                <div className="t1">
                <h2>HARRY POTTER</h2>
                <h5>by J.K. Rowling</h5>
                </div>
                <div className="t2">
                  <h3>Quantity: 1</h3>
                  <h2>$99</h2>
                </div>
              </div>
              <button>Remove</button>
            </div>
          </div>
          <div className="border"></div>
        </div>
        <div className="section">
          <h3>Order Summary</h3>
          <div className="all">
            <div className="Shopping">
              <p>Shipping</p>
              <h5>Select Method<GrNext /></h5>
            </div>
            <div className="pay">
              <p>Payment</p>
              <h5>Select Method<GrNext /></h5>
            </div>
            <div className="line"></div>
            <div className="tot">
              <p>Total</p>
              <h5>$188</h5>
            </div>
          </div>
          <button>Continue to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
