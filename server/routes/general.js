const express = require("express");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: General
 *   description: General endpoints
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome message for the API
 *     description: This endpoint returns a welcome message with a link to the API documentation.
 *     tags: [General]
 *     responses:
 *       200:
 *         description: Welcome message with API documentation link.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Welcome to the razorpay payment gateway API, for documentation visit /api-docs
 */
router.get("/", (req, res) => {
  res.send({
    message:
      "Welcome to the razorpay payment gateway API, for documentation visit /api-docs",
  });
});

module.exports = router;
