import "./App.css";
import Payment from "./pages/Payment";
import Logo from "./assets//icon.png";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <h1>Payment Gateway Integration with Razorpay</h1>
      </header>
      <Payment />
      <footer className="footer">
        <p>Developed by Cheegiti Mahesh | 2025</p>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/cheegitimahesh"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MaheshCheegiti"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://github.com/Maheshcheegiti/razorpay-payment-gateway"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
          <a
            href="https://razorpay-payment-gateway-ukev.onrender.com/api-docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            API Docs
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
