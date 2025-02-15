const express = require("express");
const {
  getPayments,
  createOrder,
  verifyPayment,
} = require("../controllers/payment");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Razorpay Payment API
 */

/**
 * @swagger
 * /api/payment/get-payments:
 *   get:
 *     summary: Get all payments
 *     tags: [Payments]
 *     responses:
 *       200:
 *         description: List of all payments
 *       500:
 *         description: Server error
 */
router.get("/get-payments", getPayments);

/**
 * @swagger
 * /api/payment/create-order:
 *   post:
 *     summary: Create a new Razorpay order
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 500
 *     responses:
 *       200:
 *         description: Order created successfully
 *       500:
 *         description: Server error
 */
router.post("/create-order", createOrder);

/**
 * @swagger
 * /api/payment/verify-payment:
 *   post:
 *     summary: Verify a Razorpay payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - razorpay_order_id
 *               - razorpay_payment_id
 *               - razorpay_signature
 *             properties:
 *               razorpay_order_id:
 *                 type: string
 *               razorpay_payment_id:
 *                 type: string
 *               razorpay_signature:
 *                 type: string
 *     responses:
 *       200:
 *         description: Payment verified successfully
 *       500:
 *         description: Server error
 */
router.post("/verify-payment", verifyPayment);

module.exports = router;
