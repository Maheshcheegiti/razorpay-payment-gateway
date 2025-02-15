// PaymentsTable.js
import React, { useEffect } from "react";

const PaymentsTable = ({ fetchPayments, payments }) => {
  useEffect(() => {
    fetchPayments();
  }, []);

  const formatDateTime = (date) => {
    const d = new Date(date);
    return (
      ("0" + d.getDate()).slice(-2) +
      "-" +
      ("0" + (d.getMonth() + 1)).slice(-2) +
      "-" +
      d.getFullYear() +
      " " +
      ("0" + d.getHours()).slice(-2) +
      ":" +
      ("0" + d.getMinutes()).slice(-2) +
      ":" +
      ("0" + d.getSeconds()).slice(-2)
    );
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Payment ID</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.length > 0 ? (
            payments.map((payment) => (
              <tr key={payment._id}>
                <td>{payment.razorpay_order_id}</td>
                <td>{payment.razorpay_payment_id}</td>
                <td>₹{payment.amount / 100}</td>
                <td>{formatDateTime(payment.date)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No payments found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default PaymentsTable;
