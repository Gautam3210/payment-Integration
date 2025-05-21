import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Card from "./Card";

function App() {
  const handleBuyItemButton = async (amount) => {
    const { data } = await axios.post("http://localhost:5000/create-order", {
      amount,
    });
    const keyId = await axios.get("http://localhost:5000/get-key")
    const options = {
      key: keyId.data.keyId,
      amount: data.amount,
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      order_id: data.id,
      callback_url: "http://localhost:5000/payment-complete",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <Card amount={5000} handleBuyItemButton={handleBuyItemButton}>
          hello
        </Card>
        <Card amount={4000} handleBuyItemButton={handleBuyItemButton}>
          hello
        </Card>
      </div>
    </>
  );
}

export default App;
