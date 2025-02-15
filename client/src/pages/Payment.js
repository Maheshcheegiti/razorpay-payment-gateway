// Payment.js
import React, { useState } from "react";
import TShirtCard from "../components/TShirtCard";
import PaymentsTable from "../components/PaymentsTable";

const Payment = () => {
  const [payments, setPayments] = useState([]);

  const handlePayment = async (amount) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: amount,
          }),
        }
      );
      const data = await response.json();
      handlePaymentVerify(data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handlePaymentVerify = async (data) => {
    console.log(data);
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      currency: data.currency,
      amount: data.amount,
      name: "US Polo T-Shirt",
      description: "Payment",
      order_id: data.id,
      handler: async (response) => {
        try {
          console.log(response);
          const verify = await fetch(
            process.env.REACT_APP_API_URL + "/api/payment/verify-payment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                amount: data.amount,
              }),
            }
          );
          if (verify.status === 200) {
            fetchPayments();
          } else {
            alert("Payment Failed");
          }
        } catch (err) {
          console.log(err);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const fetchPayments = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/api/payment/get-payments"
      );
      const data = await response.json();
      setPayments(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="page">
      <TShirtCard handlePayment={handlePayment} />
      <h3>All Payments</h3>
      <PaymentsTable fetchPayments={fetchPayments} payments={payments} />
    </div>
  );
};

export default Payment;
