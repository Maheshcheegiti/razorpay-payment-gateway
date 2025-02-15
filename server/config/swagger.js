const swaggerJsDoc = require("swagger-jsdoc");
require("dotenv").config();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Razorpay Payment Gateway API",
      version: "1.0.0",
      description: "API documentation for the Razorpay Payment Gateway API.",
    },
    components: {
      schemas: {
        Payment: {
          type: "object",
          required: [
            "razorpay_order_id",
            "razorpay_payment_id",
            "razorpay_signature",
          ],
          properties: {
            _id: {
              type: "string",
              description: "Unique identifier for the payment",
            },
            razorpay_order_id: {
              type: "string",
              description: "Order ID generated by Razorpay",
            },
            razorpay_payment_id: {
              type: "string",
              description:
                "Payment ID returned by Razorpay after successful payment",
            },
            razorpay_signature: {
              type: "string",
              description: "Signature generated for verifying the payment",
            },
            amount: {
              type: "number",
              description: "Amount paid in INR",
            },
            date: {
              type: "string",
              format: "date-time",
              description: "Date when the payment was created",
            },
          },
          example: {
            _id: "65a1f5e2bde568001f8e2b9c",
            razorpay_order_id: "order_LcYvD1saflKQW0",
            razorpay_payment_id: "pay_LcYvD1saflKQW1",
            razorpay_signature: "e5d1a9c5b68b0e2e7f6a0c7f6a1b6d8e",
            amount: 500,
            date: "2024-02-15T12:00:00.000Z",
          },
        },
      },
    },

    servers: [
      {
        url: "https://razorpay-payment-gateway-ukev.onrender.com",
      },
      {
        url: "http://localhost:" + process.env.PORT,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerJsDoc(swaggerOptions);
