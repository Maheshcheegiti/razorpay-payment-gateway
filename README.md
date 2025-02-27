# razorpay-payment-gateway

A complete Razorpay payment gateway integration with React (frontend) and Node.js (backend). This repository provides a seamless way to integrate Razorpay for handling payments, including order creation, secure payment verification, and frontend payment UI. Designed for easy integration and deployment. 🚀

## Demo Link

- [Live Demo](https://razorpay-integration-demo.netlify.app)

## Features

- **Razorpay Payment Gateway**: A complete integration with Razorpay for handling payments.
- **Order Creation**: Create orders on the backend and fetch them on the frontend.
- **Secure Payment Verification**: Verify payments securely on the backend.
- **Frontend Payment UI**: A simple and clean UI for making payments.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js
- **Database**: MongoDB
- **Payment Gateway**: Razorpay

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository

```bash
https://github.com/Maheshcheegiti/razorpay-payment-gateway.git
```

2. Install dependencies

```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd client
npm install
```

3. Create a `.env` file in the `server` directory and add the following environment variables

```
PORT=SAMPLE_PORT
MONGO_URI=SAMPLE_MONGO_URI
MONGO_DB_NAME=SAMPLE_MONGO_DB_NAME
RAZORPAY_KEY_ID=SAMPLE_RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET=SAMPLE_RAZORPAY_KEY_SECRET
CORS_ORIGIN=SAMPLE_CORS_ORIGIN
```

4. Create a `.env` file in the `client` directory and add the following environment variables

```
REACT_APP_API_URL=SAMPLE_API_URL
REACT_APP_RAZORPAY_KEY_ID=SAMPLE_RAZORPAY_KEY_ID
```

5. Run the development server

```bash
# Run backend server
cd server
npm start

# Run frontend server
cd client
npm start
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

- [Razorpay](https://razorpay.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
